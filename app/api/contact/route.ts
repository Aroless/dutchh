import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, note, message } = body;
    const userNote = note || message || "";

    // 1. Zorunlu Alan Kontrolü
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Lütfen zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    // 2. Supabase Veritabanına Kaydet
    const { data, error } = await supabase
      .from("contacts")
      .insert([{ name, email, phone, service, note: userNote }])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 3. Resend ile Bildirim E-Postası Gönder
    try {
      await resend.emails.send({
        from: "Lejit Website <onboarding@resend.dev>",
        to: ["a3966aa@gmail.com"], // Kendi e-posta adresin
        subject: `🔥 Yeni İletişim Formu: ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; background-color: #f4f4f5;">
            <h2 style="color: #eab308;">Siteden Yeni Bir İletişim Talebi Geldi!</h2>
            <hr/>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-Posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Hizmet:</strong> ${service || "Belirtilmedi"}</p>
            <p><strong>Not / Mesaj:</strong></p>
            <blockquote style="background: #fff; padding: 15px; border-left: 4px solid #eab308;">
              ${userNote || "Not eklenmedi."}
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
      data,
    });
  } catch (err) {
    console.error("Sunucu Hatası:", err);
    return NextResponse.json(
      { error: "Bir sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}