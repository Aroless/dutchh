import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { supabaseAdmin } from "@/lib/supabase-admin";

async function requireAdmin() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { response: NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 }) };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") {
    return { response: NextResponse.json({ error: "Bu işlem için yetkiniz yok." }, { status: 403 }) };
  }

  return { user };
}

export async function GET() {
  const auth = await requireAdmin();
  if ("response" in auth) return auth.response;

  const { data, error } = await supabaseAdmin
    .from("profiles")
    .select("*")
    .eq("role", "customer")
    .order("full_name");

  if (error) {
    console.error("Müşteri listesi alınamadı:", error);
    return NextResponse.json({ error: "Müşteriler alınamadı." }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const auth = await requireAdmin();
  if ("response" in auth) return auth.response;

  const body = await request.json();
  const clientName = typeof body.clientName === "string" ? body.clientName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";
  const projectName = typeof body.projectName === "string" ? body.projectName.trim() : "";

  if (
    !clientName || clientName.length > 120 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    password.length < 8 || password.length > 128 ||
    projectName.length > 160
  ) {
    return NextResponse.json({ error: "Geçerli müşteri bilgileri girin." }, { status: 400 });
  }

  const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (authError || !authData.user) {
    console.error("Müşteri hesabı oluşturulamadı:", authError);
    return NextResponse.json({ error: "Müşteri hesabı oluşturulamadı." }, { status: 400 });
  }

  const { error: profileError } = await supabaseAdmin.from("profiles").insert({
    id: authData.user.id,
    email,
    full_name: clientName,
    role: "customer",
    project_name: projectName || "Web Sitesi Projesi",
    project_status: "Anlaşma Sağlandı & Başlandı",
    project_progress: 10,
    notes: "Proje yönetimi başlatıldı.",
    revenue: 0,
    orders: 0,
    ad_spend: 0,
    roas: 0,
    clicks: 0,
    conversion_rate: 0,
  });

  if (profileError) {
    await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
    console.error("Müşteri profili oluşturulamadı:", profileError);
    return NextResponse.json({ error: "Müşteri profili oluşturulamadı." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function PATCH(request: Request) {
  const auth = await requireAdmin();
  if ("response" in auth) return auth.response;

  const body = await request.json();
  const id = typeof body.id === "string" ? body.id : "";
  const numericFields = ["project_progress", "revenue", "orders", "ad_spend", "roas", "clicks", "conversion_rate"];
  const updateData: Record<string, string | number> = {};

  for (const field of ["project_name", "project_status", "notes"]) {
    if (typeof body[field] === "string") updateData[field] = body[field].trim();
  }

  for (const field of numericFields) {
    if (typeof body[field] !== "number" || !Number.isFinite(body[field]) || body[field] < 0) {
      return NextResponse.json({ error: "Geçersiz müşteri verisi." }, { status: 400 });
    }
    updateData[field] = body[field];
  }

  const projectProgress = updateData.project_progress;
  const conversionRate = updateData.conversion_rate;

  if (
    !id ||
    (typeof projectProgress === "number" && projectProgress > 100) ||
    (typeof conversionRate === "number" && conversionRate > 100)
  ) {
    return NextResponse.json({ error: "Geçersiz müşteri verisi." }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("profiles").update(updateData).eq("id", id).eq("role", "customer");
  if (error) {
    console.error("Müşteri güncellenemedi:", error);
    return NextResponse.json({ error: "Müşteri güncellenemedi." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export { requireAdmin };
