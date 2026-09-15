import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const requestLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function getClientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recentRequests = (requestLog.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(ip, recentRequests);
  return false;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function POST(req: Request) {
  try {
    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > 20_000) {
      return NextResponse.json({ error: "İstek çok büyük." }, { status: 413 });
    }

    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Çok fazla deneme yapıldı. Lütfen daha sonra tekrar deneyin." },
        { status: 429, headers: { "Retry-After": "600" } }
      );
    }

    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";
    const turnstileToken = typeof body.turnstileToken === "string" ? body.turnstileToken : "";
    const userNote = typeof (body.note || body.message) === "string"
      ? (body.note || body.message).trim()
      : "";

    if (website) {
      return NextResponse.json({ success: true, message: "Talebiniz başarıyla alındı." });
    }

    if (!turnstileToken) {
      return NextResponse.json({ error: "Güvenlik doğrulaması gerekli." }, { status: 400 });
    }

    const turnstileResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
        remoteip: clientIp === "unknown" ? undefined : clientIp,
      }),
    });
    const turnstileResult = await turnstileResponse.json() as { success?: boolean };

    if (!turnstileResponse.ok || !turnstileResult.success) {
      return NextResponse.json({ error: "Güvenlik doğrulaması başarısız." }, { status: 400 });
    }

    // 1. Zorunlu Alan Kontrolü
    if (
      !name ||
      !email ||
      !phone ||
      name.length > 120 ||
      email.length > 254 ||
      phone.length > 40 ||
      service.length > 120 ||
      userNote.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Lütfen geçerli ve eksiksiz bilgiler gönderin." },
        { status: 400 }
      );
    }

    // 2. Supabase Veritabanına Kaydet
    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, phone, service, note: userNote }]);

    if (error) {
      console.error("İletişim kaydı oluşturulamadı:", error);
      return NextResponse.json({ error: "Talebiniz kaydedilemedi." }, { status: 500 });
    }

    // 3. Resend ile Bildirim E-Postası Gönder
    try {
      await resend.emails.send({
        from: "Dutch Angle Website <onboarding@resend.dev>",
        to: ["a396aa@gmail.com"],
        subject: `🔥 Yeni İletişim Formu: ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; background-color: #f4f4f5;">
            <h2 style="color: #eab308;">Siteden Yeni Bir İletişim Talebi Geldi!</h2>
            <hr/>
            <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
            <p><strong>E-Posta:</strong> ${escapeHtml(email)}</p>
            <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Hizmet:</strong> ${escapeHtml(service || "Belirtilmedi")}</p>
            <p><strong>Not / Mesaj:</strong></p>
            <blockquote style="background: #fff; padding: 15px; border-left: 4px solid #eab308;">
              ${escapeHtml(userNote || "Not eklenmedi.")}
            </blockquote>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("E-posta gönderimi esnasında hata oluştu:", emailError);
      // E-posta servisinde aksaklık olsa dahi veritabanı kaydı başarılı olduğu için kullanıcıya hata hissettirmiyoruz
    }

    return NextResponse.json({
      success: true,
      message: "Talebiniz başarıyla alındı.",
    });
  } catch (err) {
    console.error("Sunucu Hatası:", err);
    return NextResponse.json(
      { error: "Bir sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}