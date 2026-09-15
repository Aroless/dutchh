"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  note: string;
  created_at: string;
}

interface ClientProfile {
  id: string;
  full_name: string;
  email: string;
  project_name: string;
  project_status: string;
  project_progress: number;
  notes: string;
  revenue: number;
  orders: number;
  ad_spend: number;
  roas: number;
  clicks: number;
  conversion_rate: number;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [clients, setClients] = useState<ClientProfile[]>([]);
  const [selectedClient, setSelectedClient] = useState<ClientProfile | null>(null);
  
  const [loading, setLoading] = useState(true);

  // Müşteri Hesabı Oluşturma Formu Durumları
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPassword, setClientPassword] = useState("");
  const [projectName, setProjectName] = useState("");
  const [createLoading, setCreateLoading] = useState(false);
  const [createSuccess, setCreateSuccess] = useState<string | null>(null);

  // Müşteri Verilerini Güncelleme Yüklenme Durumu
  const [updateLoading, setUpdateLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        fetchMessages();
        fetchClients();
      }
    };

    checkUser();
  }, [router]);

  // Siteden gelen talepleri çek
  async function fetchMessages() {
    const response = await fetch("/api/admin/contacts");
    const result = await response.json();

    setMessages(response.ok ? result.data || [] : []);
  }

  // Tüm kayıtlı müşterileri çek
  async function fetchClients() {
    setLoading(true);
    const response = await fetch("/api/admin/clients");
    const result = await response.json();
    const data = response.ok ? result.data || [] : [];

    setClients(data || []);
    if (data && data.length > 0 && !selectedClient) {
      setSelectedClient(data[0]); // Varsayılan ilk müşteriyi seç
    }
    setLoading(false);
  }

  // Müşteri Hesabı Oluşturma İşlemi
  const handleCreateClient = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreateLoading(true);
    setCreateSuccess(null);

    const response = await fetch("/api/admin/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientName,
        email: clientEmail,
        password: clientPassword,
        projectName,
      }),
    });
    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Müşteri oluşturulamadı.");
    } else {
      setCreateSuccess(`Müşteri hesabı başarıyla açıldı! E-posta: ${clientEmail}`);
      setClientName("");
      setClientEmail("");
      setClientPassword("");
      setProjectName("");
      fetchClients();
    }
    setCreateLoading(false);
  };

  // Müşteri Verilerini Güncelleme
  const handleUpdateClientData = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClient) return;

    setUpdateLoading(true);

    const response = await fetch("/api/admin/clients", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: selectedClient.id,
        project_name: selectedClient.project_name,
        project_status: selectedClient.project_status,
        project_progress: selectedClient.project_progress,
        notes: selectedClient.notes,
        revenue: selectedClient.revenue,
        orders: selectedClient.orders,
        ad_spend: selectedClient.ad_spend,
        roas: selectedClient.roas,
        clicks: selectedClient.clicks,
        conversion_rate: selectedClient.conversion_rate,
      }),
    });
    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Güncelleme sırasında hata oluştu.");
    } else {
      alert(`${selectedClient.full_name} için canlı veriler başarıyla güncellendi!`);
      fetchClients();
    }
    setUpdateLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bu mesajı silmek istediğinize emin misiniz?")) return;

    const response = await fetch("/api/admin/contacts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Silinirken hata oluştu.");
    } else {
      setMessages(messages.filter((msg) => msg.id !== id));
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-yellow-500 font-medium text-lg animate-pulse">Yönetici Paneli Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Üst Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-gray-800 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-yellow-500 tracking-wider">
              LEJİT. <span className="text-white text-xl font-normal">| Yönetici Paneli</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Gelen talepler, Müşteri Performansı ve Canlı Veri Yönetimi
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
          >
            Çıkış Yap
          </button>
        </div>

        {/* Müşteri Hesabı Açma Kartı */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-yellow-500 mb-2">➕ Anlaşılan Müşteriye Panel Hesabı Aç</h2>
          <p className="text-gray-400 text-sm mb-6">Müşterinin özel paneline giriş yapabilmesi için kullanıcı bilgilerini tanımlayın.</p>

          {createSuccess && (
            <div className="mb-4 p-3 bg-green-500/10 border border-green-500/50 text-green-400 text-sm rounded-lg">
              {createSuccess}
            </div>
          )}

          <form onSubmit={handleCreateClient} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Müşteri Ad Soyad / Firma"
              required
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-yellow-500"
            />
            <input
              type="email"
              placeholder="Müşteri E-Posta"
              required
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-yellow-500"
            />
            <input
              type="text"
              placeholder="Müşteriye Verilecek Şifre"
              required
              value={clientPassword}
              onChange={(e) => setClientPassword(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-yellow-500"
            />
            <input
              type="text"
              placeholder="Proje Adı (Örn: Kurumsal Web)"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-yellow-500"
            />
            <div className="lg:col-span-4 flex justify-end">
              <button
                type="submit"
                disabled={createLoading}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors disabled:opacity-50"
              >
                {createLoading ? "Hesap Oluşturuluyor..." : "Müşteri Hesabını Tanımla"}
              </button>
            </div>
          </form>
        </div>

        {/* 📊 YENİ BÖLÜM: MÜŞTERİ VERİLERİ VE CANLI EDİTÖR */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            📊 Müşteri Verilerini Canlı Yönet
          </h2>
          <p className="text-gray-400 text-sm mb-6">Müşterinizi seçin, proje ilerlemesini ve e-ticaret/reklam verilerini anında güncelleyin.</p>

          {clients.length === 0 ? (
            <div className="p-8 text-center text-gray-500 border border-gray-800 rounded-xl">
              Henüz sistemde kayıtlı müşteri bulunmuyor. Yukarıdan yeni bir müşteri hesabı ekleyin.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Sol Taraf: Müşteri Listesi */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase block mb-2">
                  MÜŞTERİ SEÇİN ({clients.length})
                </span>
                {clients.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedClient(c)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedClient?.id === c.id
                        ? "bg-yellow-500/10 border-yellow-500/50 text-white"
                        : "bg-gray-950/60 border-gray-800/80 hover:border-gray-700 text-gray-400"
                    }`}
                  >
                    <div className="font-bold text-sm text-white">{c.full_name || "İsimsiz Müşteri"}</div>
                    <div className="text-xs text-gray-500 mt-1">{c.email}</div>
                    <div className="text-xs text-yellow-500/80 mt-2 font-medium">Proje: {c.project_name || "Proje Belirtilmemiş"}</div>
                  </button>
                ))}
              </div>

              {/* Sağ Taraf: Düzenleme Formu */}
              {selectedClient && (
                <div className="lg:col-span-2 bg-gray-950 p-6 rounded-xl border border-gray-800">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-800">
                    <div>
                      <span className="text-xs text-yellow-500 font-semibold uppercase">DÜZENLENEN MÜŞTERİ</span>
                      <h3 className="text-xl font-bold text-white">{selectedClient.full_name}</h3>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
                      ID: {selectedClient.id.slice(0, 8)}...
                    </span>
                  </div>

                  <form onSubmit={handleUpdateClientData} className="space-y-6">
                    {/* Proje Bilgileri */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">1. Proje & Aşama Bilgileri</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-gray-500 block mb-1">Proje Adı</label>
                          <input
                            type="text"
                            value={selectedClient.project_name || ""}
                            onChange={(e) => setSelectedClient({ ...selectedClient, project_name: e.target.value })}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:border-yellow-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 block mb-1">Mevcut Aşama</label>
                          <input
                            type="text"
                            value={selectedClient.project_status || ""}
                            onChange={(e) => setSelectedClient({ ...selectedClient, project_status: e.target.value })}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:border-yellow-500 outline-none"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="text-xs text-gray-500 block mb-1">
                            İlerleme Yüzdesi: <strong className="text-yellow-500">%{selectedClient.project_progress || 0}</strong>
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={selectedClient.project_progress || 0}
                            onChange={(e) => setSelectedClient({ ...selectedClient, project_progress: Number(e.target.value) })}
                            className="w-full accent-yellow-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* E-Ticaret & Reklam Verileri */}
                    <div>
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">2. E-Ticaret & Reklam Metrikleri (Canlı)</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="text-xs text-gray-500 block mb-1">Toplam Ciro (TL)</label>
                          <input
                            type="number"
                            value={selectedClient.revenue || 0}
                            onChange={(e) => setSelectedClient({ ...selectedClient, revenue: Number(e.target.value) })}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-emerald-400 font-bold focus:border-yellow-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 block mb-1">Sipariş Adedi</label>
                          <input
                            type="number"
                            value={selectedClient.orders || 0}
                            onChange={(e) => setSelectedClient({ ...selectedClient, orders: Number(e.target.value) })}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:border-yellow-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 block mb-1">Reklam Harcaması (TL)</label>
                          <input
                            type="number"
                            value={selectedClient.ad_spend || 0}
                            onChange={(e) => setSelectedClient({ ...selectedClient, ad_spend: Number(e.target.value) })}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-rose-400 font-bold focus:border-yellow-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 block mb-1">ROAS (Getiri Oranı)</label>
                          <input
                            type="number"
                            step="0.1"
                            value={selectedClient.roas || 0}
                            onChange={(e) => setSelectedClient({ ...selectedClient, roas: Number(e.target.value) })}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-yellow-400 font-bold focus:border-yellow-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 block mb-1">Reklam Tıklaması</label>
                          <input
                            type="number"
                            value={selectedClient.clicks || 0}
                            onChange={(e) => setSelectedClient({ ...selectedClient, clicks: Number(e.target.value) })}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-blue-400 font-bold focus:border-yellow-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500 block mb-1">Dönüşüm Oranı (%)</label>
                          <input
                            type="number"
                            step="0.01"
                            value={selectedClient.conversion_rate || 0}
                            onChange={(e) => setSelectedClient({ ...selectedClient, conversion_rate: Number(e.target.value) })}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:border-yellow-500 outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Ajans Notları */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">3. Ajans Güncelleme Notu</h4>
                      <textarea
                        rows={3}
                        value={selectedClient.notes || ""}
                        onChange={(e) => setSelectedClient({ ...selectedClient, notes: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-sm text-gray-200 focus:border-yellow-500 outline-none"
                        placeholder="Müşterinizin panelinde göreceği notlar..."
                      />
                    </div>

                    {/* Kaydet Butonu */}
                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={updateLoading}
                        className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-3 rounded-xl text-sm transition-all disabled:opacity-50"
                      >
                        {updateLoading ? "Güncelleniyor..." : "🚀 Verileri Canlı Kaydet"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Gelen Mesajlar Başlığı */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-1">📩 Siteden Gelen Talepler</h2>
            <span className="bg-gray-900 border border-gray-800 px-3 py-1 rounded-full text-xs text-gray-400">
              Toplam: <strong className="text-yellow-500">{messages.length}</strong>
            </span>
          </div>

          {/* Mesaj Listesi */}
          {messages.length === 0 ? (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center text-gray-500">
              Henüz gelen bir mesaj bulunmuyor.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl hover:border-gray-700 transition-colors"
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-gray-800 pb-4 mb-4 gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{msg.name}</h3>
                      <p className="text-xs text-yellow-500/80 font-medium">
                        Hizmet: {msg.service || "Belirtilmemiş"}
                      </p>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">
                      {new Date(msg.created_at).toLocaleString("tr-TR")}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500 text-xs block">E-POSTA</span>
                      <a href={`mailto:${msg.email}`} className="text-gray-300 hover:text-yellow-500 underline">
                        {msg.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs block">TELEFON</span>
                      <a href={`tel:${msg.phone}`} className="text-gray-300 hover:text-yellow-500 underline">
                        {msg.phone || "Telefon verilmemiş"}
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-950 p-4 rounded-xl border border-gray-800/80 mb-4">
                    <span className="text-gray-500 text-xs block mb-1">NOT / PROJE DETAYLARI</span>
                    <p className="text-gray-300 text-sm whitespace-pre-wrap">{msg.note || "Not eklenmemiş."}</p>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => handleDelete(msg.id)}
                      className="text-xs text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 px-3 py-1.5 rounded-md transition-colors"
                    >
                      Mesajı Sil
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}