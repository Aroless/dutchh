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

      // 3. Role Göre Yönlendir (proxy.ts yeni oturum çerezini görsün diye bilerek tam sayfa yönlendirme)
      if (profile && profile.role === "admin") {
        // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- tam sayfa yükleme gerekli
        window.location.href = "/admin";
      } else {
        // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- tam sayfa yükleme gerekli
        window.location.href = "/dashboard";
      }
    } catch {
      setError("Beklenmeyen bir hata oluştu.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-paper px-6 py-20 text-ink">
      <div className="w-full max-w-md border-t border-ink pt-8">
        <div className="mb-10">
          <h1 className="font-serif text-5xl tracking-tight">
            Dutch Angle.
          </h1>
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Müşteri giriş portalı</p>
        </div>

        {error && (
          <div className="mb-5 border-l-2 border-red-700 bg-paper-light p-4 text-sm text-red-800">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-muted-ink">
              E-Posta
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-[#aaa296] bg-transparent px-0 py-3 text-ink outline-none transition-colors placeholder:text-[#aaa296] focus:border-gold"
              placeholder="eposta@adresiniz.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-muted-ink">
              Şifre
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-[#aaa296] bg-transparent px-0 py-3 text-ink outline-none transition-colors placeholder:text-[#aaa296] focus:border-gold"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-ink py-4 text-xs font-bold uppercase tracking-[0.16em] text-paper-light transition-colors hover:bg-gold disabled:opacity-50"
          >
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </div>
  );
}