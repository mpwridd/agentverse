import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mini PC vs VPS Cloud: Mana yang Lebih Worth?",
  description: "Perbandingan Mini PC self-hosted vs VPS cloud (AWS, GCP, DigitalOcean). Dari biaya, performa, sampai fleksibilitas.",
};

export default function RaspberryPiVsMiniPC() {
  return (
    <article className="max-w-none">
      <Link href="/reviews" className="text-sm mb-6 inline-block text-blue-600 hover:text-blue-700">
        ← Kembali ke Reviews
      </Link>

      <div className="flex items-center gap-3 text-xs mb-6">
        <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 font-medium">Comparison</span>
        <span style={{ color: "var(--text-secondary)" }}>Mei 2026 · 6 menit baca</span>
      </div>

      <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        Mini PC vs VPS Cloud: Mana yang Lebih Worth?
      </h1>

      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Mau jalanin AI Agent 24/7? Dua pilihan: beli Mini PC sendiri atau sewa VPS cloud.
        Mana yang lebih murah dan worth it dalam jangka panjang?
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Perbandingan Biaya
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 border font-semibold" style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>Aspek</th>
              <th className="text-left p-3 border font-semibold" style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>Mini PC Self-Hosted</th>
              <th className="text-left p-3 border font-semibold" style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>VPS Cloud</th>
            </tr>
          </thead>
          <tbody style={{ color: "var(--text-secondary)" }}>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>Biaya Awal</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>Rp 2.8 - 3.3 juta (sekali)</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>Rp 0</td></tr>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>Biaya Bulanan</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>Rp 30-50rb (listrik)</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>Rp 200rb - 1.5jt/bulan</td></tr>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>Biaya 1 Tahun</td><td className="p-3 border font-bold text-green-600" style={{ borderColor: "var(--border)" }}>Rp 3.4 - 3.9 juta</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>Rp 2.4 - 18 juta</td></tr>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>Biaya 3 Tahun</td><td className="p-3 border font-bold text-green-600" style={{ borderColor: "var(--border)" }}>Rp 3.9 - 4.8 juta</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>Rp 7.2 - 54 juta</td></tr>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>RAM</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>16-32GB (sekali bayar)</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>1-8GB (tergantung plan)</td></tr>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>Storage</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>500GB+ NVMe</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>20-80GB</td></tr>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>Internet</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>Tergantung ISP rumah</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>Gigabit datacenter</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Kapan Pilih Mini PC?
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li><strong style={{ color: "var(--text-primary)" }}>Jangka panjang</strong> — break point di bulan ke-6. Setelah itu lebih murah.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Butuh RAM/storage besar</strong> — 16GB RAM + 500GB NVMe cuma Rp 3.3 juta.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Mau full kontrol</strong> — hardware di tangan, tidak tergantung provider.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Privacy</strong> — data di rumah, tidak di server orang lain.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Kapan Pilih VPS Cloud?
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li><strong style={{ color: "var(--text-primary)" }}>Butuh uptime 99.9%</strong> — datacenter punya UPS + backup internet.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>IP public statik</strong> — mudah untuk hosting website/API.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Scalability</strong> — naikkan specs kapan saja.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Short-term project</strong> — sewa per bulan, selesai stop.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Best of Both Worlds
      </h2>
      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Pakai Mini PC untuk workload berat (AI Agent, Docker, NAS) yang butuh RAM/storage besar.
        Pakai VPS murah (Rp 50-100rb/bulan) sebagai reverse proxy + endpoint public.
        Kombinasi keduanya = performa maksimal + akses dari mana saja.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Rekomendasi Mini PC
      </h2>

      <div className="space-y-4">
        {[
          { name: "Lenovo ThinkCentre M910q i5 Gen 7 8GB/256GB", price: "Rp 869.000", note: "Budget entry", url: "https://s.shopee.co.id/2BC5Je6aDR" },
          { name: "Dell OptiPlex 3050 i5-6500T 8GB/256GB", price: "Rp 650.000", note: "Dell murah", url: "https://s.shopee.co.id/1gFok4DBKV" },
          { name: "Beelink SEi8 i5-8279U 16/500GB", price: "Rp 5.199.000", note: "Budget terbaik", url: "https://s.shopee.co.id/4Va06EWqTK" },
          { name: "GEEKOM A5 AMD R7 5825U 32GB/1TB", price: "Rp 8.178.000", note: "Value flagship", url: "https://s.shopee.co.id/2LVVWPkofH" },
          { name: "Mac Mini M4 24GB/512GB", price: "Rp 17.610.000", note: "Apple ecosystem", url: "https://s.shopee.co.id/1BJY9Fv8iu" },
        ].map((p) => (
          <div key={p.name} className="bg-white rounded-xl p-5 flex items-center justify-between gap-4 border hover:shadow-md transition" style={{ borderColor: "var(--border)" }}>
            <div>
              <h4 className="font-semibold" style={{ color: "var(--text-primary)" }}>{p.name}</h4>
              <div className="flex items-center gap-3 mt-1">
                <span className="font-bold text-green-600">{p.price}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100" style={{ color: "var(--text-secondary)" }}>{p.note}</span>
              </div>
            </div>
            <a href={p.url} target="_blank" rel="noopener noreferrer nofollow" className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition">
              Beli →
            </a>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Verdict
      </h2>
      <p className="mb-2" style={{ color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--text-primary)" }}>Kalau butuh jangka panjang:</strong> Mini PC menang telak. Investasi Rp 3.3 juta, hemat Rp 500rb+/bulan vs cloud VPS.
      </p>
      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--text-primary)" }}>Kalau butuh fleksibilitas:</strong> VPS cloud tetap oke untuk project pendek atau butuh IP public statik.
      </p>

      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h3 className="font-semibold mb-3 text-blue-800">🔗 Artikel Terkait</h3>
        <ul className="space-y-2 list-none p-0">
          <li><Link href="/reviews/mini-pc-ai-terbaik-2026" className="text-blue-600 hover:text-blue-700">10 Mini PC Terbaik untuk Proxmox 2026</Link></li>
          <li><Link href="/reviews/setup-ai-agent-di-rumah" className="text-blue-600 hover:text-blue-700">Cara Install Proxmox + Setup AI Agent</Link></li>
        </ul>
      </div>
    </article>
  );
}
