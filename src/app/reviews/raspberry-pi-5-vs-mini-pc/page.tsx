import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Raspberry Pi 5 vs Mini PC: Mana yang Lebih Worth?",
  description: "Perbandingan lengkap Raspberry Pi 5 dan Mini PC untuk home lab AI. Dari harga, performa, hingga use case terbaik.",
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
        Raspberry Pi 5 vs Mini PC: Mana yang Lebih Worth?
      </h1>

      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Dua pilihan terbaik untuk home lab AI. Mana yang lebih cocok untuk kebutuhanmu?
        Mari bandingkan dari segi harga, performa, konsumsi listrik, dan use case.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Spesifikasi Head-to-Head
      </h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 border font-semibold" style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>Aspek</th>
              <th className="text-left p-3 border font-semibold" style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>Raspberry Pi 5</th>
              <th className="text-left p-3 border font-semibold" style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>Mini PC</th>
            </tr>
          </thead>
          <tbody style={{ color: "var(--text-secondary)" }}>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>Harga</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>Rp 1.2 - 4.2 juta (paket)</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>Rp 2.7 - 28 juta</td></tr>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>CPU</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>ARM Cortex-A76 (4 core)</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>Intel i5/i7 atau AMD Ryzen</td></tr>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>RAM Maks</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>8GB LPDDR4X</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>64GB+ DDR4/DDR5</td></tr>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>Konsumsi Listrik</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>5-12W</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>15-65W</td></tr>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>Storage</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>microSD + NVMe (dengan HAT)</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>NVMe SSD bawaan</td></tr>
            <tr><td className="p-3 border font-medium" style={{ borderColor: "var(--border)" }}>GPU/AI</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>AI HAT+ (opsional)</td><td className="p-3 border" style={{ borderColor: "var(--border)" }}>Integrated GPU, lebih powerful</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Kapan Pilih Raspberry Pi 5?
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li><strong style={{ color: "var(--text-primary)" }}>Budget ketat</strong> — mulai Rp 1.2 juta untuk board saja</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Konsumsi listrik minimal</strong> — 5W idle, cocok jalan 24/7</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Project IoT/sensor</strong> — GPIO pins untuk hardware hacking</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Belajar Linux</strong> — platform terbaik untuk eksplorasi</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Kapan Pilih Mini PC?
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li><strong style={{ color: "var(--text-primary)" }}>Jalankan LLM 7B+</strong> — butuh RAM 16GB+ dan CPU x86</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Docker heavy</strong> — banyak container sekaligus</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Media server</strong> — transcoding butuh GPU</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Performa maksimal</strong> — tidak ada kompromi</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Rekomendasi
      </h2>

      <div className="space-y-4">
        {[
          { name: "Raspberry Pi 5 8GB Paket", price: "Rp 4.200.000", note: "Paket siap pakai", url: "https://shopee.co.id/Raspberry-Pi-5-8GB-i.995354751.27455041254?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
          { name: "Raspberry Pi 5 AI HAT+", price: "Rp 2.971.000", note: "AI acceleration", url: "https://shopee.co.id/Raspberry-Pi-5-AI-HAT-i.27499686.28674224294?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
          { name: "Beelink SEi8 i5 16/500GB", price: "Rp 2.799.000", note: "Mini PC budget", url: "https://shopee.co.id/Beelink-SEi8-i.1070891797.20293439189?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
          { name: "Beelink SEi10 i5 16/500GB", price: "Rp 3.299.000", note: "Best value Mini PC", url: "https://shopee.co.id/Beelink-SEi10-i.15438867.22681138325?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
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
        <strong style={{ color: "var(--text-primary)" }}>Pilih Raspberry Pi 5</strong> kalau budget terbatas, butuh hemat listrik, atau mau belajar hardware.
      </p>
      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--text-primary)" }}>Pilih Mini PC</strong> kalau butuh performa untuk LLM, Docker, atau media server. Worth the extra cost.
      </p>

      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h3 className="font-semibold mb-3 text-blue-800">🔗 Artikel Terkait</h3>
        <ul className="space-y-2 list-none p-0">
          <li><Link href="/reviews/mini-pc-ai-terbaik-2026" className="text-blue-600 hover:text-blue-700">10 Mini PC Terbaik untuk AI Agent 2026</Link></li>
          <li><Link href="/reviews/setup-ai-agent-di-rumah" className="text-blue-600 hover:text-blue-700">Cara Setup AI Agent di Rumah</Link></li>
        </ul>
      </div>
    </article>
  );
}
