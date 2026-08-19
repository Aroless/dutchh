"use client";

import React, { useState } from "react";

interface ServiceOption {
  id: string;
  category: "e-ticaret" | "reklam" | "sosyal medya";
  title: string;
  description: string;
  monthlyPrice: number;
}

const SERVICES: ServiceOption[] = [
  {
    id: "ecom_setup",
    category: "e-ticaret",
    title: "E-Ticaret Kurulumu & Yönetimi",
    description: "Altyapı kurulumu, ürün yüklemeleri ve ödeme entegrasyonu.",
    monthlyPrice: 15000,
  },
  {
    id: "meta_google_ads",
    category: "reklam",
    title: "Meta & Google Reklam Yönetimi",
    description: "Hedef kitle analizi, Bütçe ve ROAS odaklı kampanya yönetimi.",
    monthlyPrice: 12000,
  },
  {
    id: "social_media_pro",
    category: "sosyal medya",
    title: "Sosyal Medya Yönetimi & Prodüksiyon",
    description: "Aylık 12 Reels videosu, içerik tasarımı ve topluluk yönetimi.",
    monthlyPrice: 10000,
  },
];

export default function PackageCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // GOOGLE APPS SCRIPT URL
  const GOOGLE_SHEETS_URL =
    "https://script.google.com/macros/s/AKfycbxf2A3n3r12HImrEVWCngjUtB9Nwk1TR5UhkZrNC59rFSi8bK39b51YTGHwi7EtVz4S/exec";

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalPrice = selectedServices.reduce((sum, serviceId) => {
    const service = SERVICES.find((s) => s.id === serviceId);
    return sum + (service ? service.monthlyPrice : 0);
  }, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      alert("Lütfen en az bir hizmet seçin.");
      return;
    }

    setLoading(true);

    const selectedServiceNames = selectedServices
      .map((id) => SERVICES.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join(", ");

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      selectedServices: selectedServiceNames,
      totalPrice: totalPrice.toLocaleString("tr-TR"),
    };

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="bg-slate-900 border-2 border-slate-800 p-6 md:p-8 shadow-[8px_8px_0px_0px_#000]">
      <div className="bg-slate-950 border-2 border-slate-800 p-6 mb-8 shadow-[4px_4px_0px_0px_#000]">
        <h2 className="text-2xl font-black uppercase text-white tracking-tight">
          LEJİT / ŞEFFAF PAKET OLUŞTURUCU
        </h2>
        <p className="font-medium text-slate-400 text-sm mt-1">
          İhtiyacınız olan hizmetleri seçin, anında aylık net yatırım maliyetinizi hesaplayın.
        </p>
      </div>

      {/* Kart Seçenekleri */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {SERVICES.map((service) => {
          const isSelected = selectedServices.includes(service.id);
          return (
            <div
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`cursor-pointer p-6 border-2 select-none transition-all ${
                isSelected
                  ? "bg-blue-950/60 border-blue-500 shadow-[6px_6px_0px_0px_#000] translate-x-[-2px] translate-y-[-2px]"
                  : "bg-slate-950 border-slate-800 hover:border-slate-700 shadow-[4px_4px_0px_0px_#000]"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`font-black text-sm ${isSelected ? "text-blue-400" : "text-slate-500"}`}>
                  {isSelected ? "✓ SEÇİLDİ" : "+ EKLE"}
                </span>
                <span className="bg-slate-900 text-slate-400 text-[10px] font-bold px-2 py-1 uppercase border border-slate-800">
                  {service.category}
                </span>
              </div>
              <h3 className="font-black text-lg text-white mb-2">{service.title}</h3>
              <p className="font-medium text-xs text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="font-black text-2xl text-white border-t border-slate-800 pt-3">
                ₺{service.monthlyPrice.toLocaleString("tr-TR")}{" "}
                <span className="text-xs font-normal text-slate-400">/ ay</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fiyat ve Form */}
      <div className="bg-slate-950 border-2 border-slate-800 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-slate-800 gap-4">
          <div>
            <span className="uppercase font-bold text-blue-400 text-xs tracking-wider">
              Aylık Toplam Hizmet Bedeli
            </span>
            <div className="text-3xl md:text-4xl font-black text-white mt-1">
              ₺{totalPrice.toLocaleString("tr-TR")}{" "}
              <span className="text-xs font-normal text-slate-400">/ ay + KDV</span>
            </div>
          </div>
          <div>
            <span className="font-bold bg-slate-900 text-slate-300 text-xs px-3 py-1.5 border border-slate-700 inline-block">
              {selectedServices.length} Hizmet Seçildi
            </span>
          </div>
        </div>

        {submitted ? (
          <div className="bg-slate-900 border-2 border-blue-500 text-slate-200 p-8 text-center shadow-[4px_4px_0px_0px_#000]">
            <div className="text-3xl mb-2">✦</div>
            <h3 className="text-xl font-black text-white uppercase mb-2">Talebiniz Tarafımıza Ulaştı</h3>
            <p className="text-sm text-slate-400 font-medium">
              Girdiğiniz iletişim bilgileri üzerinden müşteri temsilcimiz sizinle en kısa sürede bağlantı kuracaktır.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <input
              type="text"
              placeholder="Adınız Soyadınız *"
              required
              className="p-3.5 bg-slate-900 border-2 border-slate-800 font-semibold focus:outline-none focus:border-blue-500 text-sm"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <input
              type="email"
              placeholder="E-posta Adresiniz *"
              required
              className="p-3.5 bg-slate-900 border-2 border-slate-800 font-semibold focus:outline-none focus:border-blue-500 text-sm"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Telefon Numaranız *"
              required
              className="p-3.5 bg-slate-900 border-2 border-slate-800 font-semibold focus:outline-none focus:border-blue-500 text-sm"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Firma / Marka Adınız (Opsiyonel)"
              className="p-3.5 bg-slate-900 border-2 border-slate-800 font-semibold focus:outline-none focus:border-blue-500 text-sm"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 neo-btn-accent py-4 text-base uppercase tracking-wider cursor-pointer mt-2 disabled:opacity-50"
            >
              {loading ? "GÖNDERİLİYOR..." : "TEKLİF TALEBİNİ İLET →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}