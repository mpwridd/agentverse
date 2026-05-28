import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Mini PC Terbaik untuk AI Agent 2026",
  description: "Rekomendasi Mini PC terbaik untuk menjalankan AI agent, local LLM, dan automation. Budget mulai 2 jutaan hingga flagship.",
};

const products = [
  { name: "Beelink SEi10 i5 16/500GB", price: "Rp 3.299.000", note: "Best value", url: "https://shopee.co.id/Beelink-SEi10-i.15438867.22681138325?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "Beelink SEi8 i5 16/500GB", price: "Rp 2.799.000", note: "Budget terbaik", url: "https://shopee.co.id/Beelink-SEi8-i.1070891797.20293439189?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "GEEKOM A9 Max AI Mini PC", price: "Rp 28.799.000", note: "Flagship", url: "https://shopee.co.id/GEEKOM-A9-Max-i.1412305006.55103108854?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "Raspberry Pi 5 8GB Paket", price: "Rp 4.200.000", note: "Paket siap pakai", url: "https://shopee.co.id/Raspberry-Pi-5-8GB-i.995354751.27455041254?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "Raspberry Pi 5 AI HAT+", price: "Rp 2.971.000", note: "AI acceleration", url: "https://shopee.co.id/Raspberry-Pi-5-AI-HAT-i.27499686.28674224294?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
];

export default function MiniPCReview() {
  return (
    <article className="max-w-none">
      <Link href="/reviews" className="text-sm mb-6 inline-block text-blue-600 hover:text-blue-700">
        ← Kembali ke Reviews
      </Link>

      <div className="flex items-center gap-3 text-xs mb-6">
        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">Review</span>
        <span style={{ color: "var(--text-secondary)" }}>Mei 2026 · 8 menit baca</span>
      </div>

      <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        10 Mini PC Terbaik untuk AI Agent 2026
      </h1>

      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Mau jalankan AI agent di rumah tanpa langganan cloud? Mini PC adalah
        solusi terbaik. Compact, hemat listrik, dan cukup powerful untuk
        menjalankan local LLM, n8n automation, dan self-hosted services 24/7.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Apa yang Dibutuhkan?
      </h2>

      <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li><strong style={{ color: "var(--text-primary)" }}>RAM 16GB</strong> — minimal untuk model 7B parameter</li>
        <li><strong style={{ color: "var(--text-primary)" }}>SSD NVMe 256GB+</strong> — untuk menyimpan model dan data</li>
        <li><strong style={{ color: "var(--text-primary)" }}>CPU modern</strong> — Intel Gen 8+ atau AMD Ryzen 3000+</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Rekomendasi
      </h2>

      <div className="space-y-4">
        {products.map((p) => (
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
        <strong style={{ color: "var(--text-primary)" }}>Best Value:</strong> Beelink SEi10 — 3.3 juta, RAM 16GB, cukup untuk 90% use case.
      </p>
      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--text-primary)" }}>Budget:</strong> Beelink SEi8 — 2.7 juta, cocok untuk mulai eksplor.
      </p>

      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h3 className="font-semibold mb-3 text-blue-800">🔗 Artikel Terkait</h3>
        <ul className="space-y-2 list-none p-0">
          <li><Link href="/comparisons" className="text-blue-600 hover:text-blue-700">Raspberry Pi 5 vs Mini PC</Link></li>
          <li><Link href="/tutorials" className="text-blue-600 hover:text-blue-700">Cara Setup AI Agent di Rumah</Link></li>
        </ul>
      </div>
    </article>
  );
}
