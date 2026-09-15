"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Giriş Yap
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError("Giriş Başarısız: E-posta veya şifre hatalı.");
        setLoading(false);
        return;
      }

      const userId = authData.user?.id;

      // 2. Kullanıcının Rolünü Kontrol Et
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", userId)
        .single();

      if (profileError) {
        console.error("Profil okuma hatası:", profileError);
      }

      // 3. Role Göre Yönlendir (Middleware için çerezleri tazeleyerek tam sayfa yönlendir)
      if (profile && profile.role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError("Beklenmeyen bir hata oluştu.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#f5f1e8] px-6 py-20 text-[#1c1b19]">
      <div className="w-full max-w-md border-t border-[#1c1b19] pt-8">
        <div className="mb-10">
          <h1 className="font-serif text-5xl tracking-tight">
            Dutch Angle.
          </h1>
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#a77b16]">Müşteri giriş portalı</p>
        </div>

        {error && (
          <div className="mb-5 border-l-2 border-red-700 bg-[#fbfaf6] p-4 text-sm text-red-800">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#6e6a61]">
              E-Posta
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-[#aaa296] bg-transparent px-0 py-3 text-[#1c1b19] outline-none transition-colors placeholder:text-[#aaa296] focus:border-[#a77b16]"
              placeholder="eposta@adresiniz.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#6e6a61]">
              Şifre
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-[#aaa296] bg-transparent px-0 py-3 text-[#1c1b19] outline-none transition-colors placeholder:text-[#aaa296] focus:border-[#a77b16]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1c1b19] py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fbfaf6] transition-colors hover:bg-[#a77b16] disabled:opacity-50"
          >
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </div>
  );
}