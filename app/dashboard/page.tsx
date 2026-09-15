"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface UserProfile {
  full_name: string;
  project_name: string;
  project_status: string;
  project_progress: number;
  notes: string;
  // E-Ticaret ve Reklam Metrikleri
  revenue?: number;
  orders?: number;
  ad_spend?: number;
  roas?: number;
  clicks?: number;
  conversion_rate?: number;
}

export default function ClientDashboard() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchClientData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }

      // Giriş yapan müşterinin tüm verilerini çek
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (data) {
        setProfile(data);
      }
      setLoading(false);
    };

    fetchClientData();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-yellow-500 font-medium text-lg animate-pulse">
          Müşteri Portalı Yükleniyor...
        </div>
      </div>
    );
  }

  // Formatlayıcılar
  const formatCurrency = (val?: number) =>
    new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(
      val ?? 0
    );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Üst Karşılama Alanı */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-gray-800 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-yellow-500 tracking-wider">
              DUTCH ANGLE. <span className="text-white text-xl font-normal">| Müşteri Portalı</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Hoş geldiniz, <strong className="text-white">{profile?.full_name || "Değerli Müşterimiz"}</strong>
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-5 py-2.5 rounded-xl font-medium text-sm transition-all"
          >
            Çıkış Yap
          </button>
        </div>

        {/* 1. BÖLÜM: Proje Durum Kartı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:col-span-2">
            <span className="text-xs font-semibold text-yellow-500 tracking-widest uppercase">PROJE ADI</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-6">
              {profile?.project_name || "Web & E-Ticaret Projesi"}
            </h2>

            {/* İlerleme Çubuğu */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-400">Proje İlerleme Durumu</span>
                <span className="text-sm font-bold text-yellow-500">%{profile?.project_progress || 0}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-yellow-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${profile?.project_progress || 0}%` }}
                ></div>
              </div>
            </div>

            {/* Ajans Notları */}
            <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
              <span className="text-xs text-gray-500 block mb-1">AJANS NOTLARI & GÜNCELLEMELER</span>
              <p className="text-sm text-gray-300 leading-relaxed">
                {profile?.notes || "Henüz bir güncelleme notu eklenmedi."}
              </p>
            </div>
          </div>

          {/* Aktif Durum Kartı */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase">MEVCUT AŞAMA</span>
              <div className="mt-3 inline-block bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium px-4 py-2 rounded-xl">
                {profile?.project_status || "Planlama Aşaması"}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <span className="text-xs text-gray-500 block mb-2">Ajanstan Destek Alın</span>
              <a
                href="mailto:destek@dutchangle.com"
                className="block text-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-2.5 rounded-xl text-sm transition-colors"
              >
                Proje Yöneticisine Yazın
              </a>
            </div>
          </div>
        </div>

        {/* 2. BÖLÜM: Canlı E-Ticaret & Reklam Verileri */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              E-Ticaret & Reklam Performansı
            </h3>
            <span className="text-xs text-gray-500">Canlı Veri Senkronizasyonu</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Ciro */}
            <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all">
              <span className="text-xs font-medium text-gray-400 block mb-1">Toplam Ciro</span>
              <div className="text-2xl font-extrabold text-emerald-400">
                {formatCurrency(profile?.revenue)}
              </div>
              <span className="text-[11px] text-gray-500 mt-2 block">
                Sipariş Adedi: <strong className="text-gray-300">{profile?.orders ?? 0}</strong>
              </span>
            </div>

            {/* Reklam Harcaması */}
            <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all">
              <span className="text-xs font-medium text-gray-400 block mb-1">Reklam Harcaması</span>
              <div className="text-2xl font-extrabold text-rose-400">
                {formatCurrency(profile?.ad_spend)}
              </div>
              <span className="text-[11px] text-gray-500 mt-2 block">Meta & Google Ads Toplamı</span>
            </div>

            {/* ROAS */}
            <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all">
              <span className="text-xs font-medium text-gray-400 block mb-1">Reklam Getirisi (ROAS)</span>
              <div className="text-2xl font-extrabold text-yellow-400">
                {profile?.roas ? `${profile.roas}x` : "0.0x"}
              </div>
              <span className="text-[11px] text-gray-500 mt-2 block">
                {profile?.roas && profile.roas >= 3 ? "🔥 Yüksek Verimlilik" : "📊 Standart Verim"}
              </span>
            </div>

            {/* Tıklama / Dönüşüm */}
            <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all">
              <span className="text-xs font-medium text-gray-400 block mb-1">Tıklama / Dönüşüm</span>
              <div className="text-2xl font-extrabold text-blue-400">
                {profile?.clicks ? profile.clicks.toLocaleString() : "0"}
              </div>
              <span className="text-[11px] text-gray-500 mt-2 block">
                Dönüşüm Oranı: <strong className="text-gray-300">%{profile?.conversion_rate ?? 0}</strong>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}