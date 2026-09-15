import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { supabaseAdmin } from "@/lib/supabase-admin";

async function requireAdmin() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") {
    return NextResponse.json({ error: "Bu işlem için yetkiniz yok." }, { status: 403 });
  }

  return null;
}

export async function GET() {
  const response = await requireAdmin();
  if (response) return response;

  const { data, error } = await supabaseAdmin
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("İletişim kayıtları alınamadı:", error);
    return NextResponse.json({ error: "İletişim kayıtları alınamadı." }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(request: Request) {
  const response = await requireAdmin();
  if (response) return response;

  const body = await request.json();
  const id = typeof body.id === "string" ? body.id : "";
  if (!id) return NextResponse.json({ error: "Geçersiz kayıt." }, { status: 400 });

  const { error } = await supabaseAdmin.from("contacts").delete().eq("id", id);
  if (error) {
    console.error("İletişim kaydı silinemedi:", error);
    return NextResponse.json({ error: "Kayıt silinemedi." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
