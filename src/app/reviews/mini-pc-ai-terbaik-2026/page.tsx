import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Mini PC Terbaik untuk AI Agent 2026",
  description:
    "Rekomendasi Mini PC terbaik untuk menjalankan AI agent, local LLM, dan automation. Budget mulai 2 jutaan hingga flagship.",
};

const products = [
  { name: "Beelink SEi10 i5 16/500GB", price: "Rp 3.299.000", note: "Cocok untuk pemula", url: "https://shopee.co.id/Beelink-SEi10-i.15438867.22681138325?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "Beelink SEi8 i5 16/500GB", price: "Rp 2.799.000", note: "Budget terbaik", url: "https://shopee.co.id/Beelink-SEi8-i.1070891797.20293439189?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "GEEKOM A9 Max AI Mini PC", price: "Rp 28.799.000", note: "Flagship", url: "https://shopee.co.id/GEEKOM-A9-Max-i.1412305006.55103108854?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "Raspberry Pi 5 8GB Paket", price: "Rp 4.200.000", note: "Paket siap pakai", url: "https://shopee.co.id/Raspberry-Pi-5-8GB-i.995354751.27455041254?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "Raspberry Pi 5 AI HAT+", price: "Rp 2.971.000", note: "AI acceleration", url: "https://shopee.co.id/Raspberry-Pi-5-AI-HAT-i.27499686.28674224294?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
];

export default function MiniPCReview() {
  return (
    <article className="max-w-none">
      <Link href="/reviews" className="text-sm mb-6 inline-block" style={{ color: "var(--accent)" }}>
        ← Kembali ke Reviews
      </Link>

      <h1 className="text-3xl font-bold mb-4">10 Mini PC Terbaik untuk AI Agent 2026</h1>

      <p style={{ color: "var(--text-secondary)" }}>
        Mau jalankan AI agent di rumah tanpa langganan cloud? Mini PC adalah
        solusi terbaik. Compact, hemat listrik, dan cukup powerful untuk
        menjalankan local LLM, n8n automation, dan self-hosted services 24/7.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Apa yang Dibutuhkan?</h2>

      <ul className="list-disc pl-6 mb-6" style={{ color: "var(--text-secondary)" }}>
        <li><strong>RAM 16GB</strong> — minimal untuk model 7B</li>
        <li><strong>SSD NVMe 256GB+</strong> — untuk model dan data</li>
        <li><strong>CPU modern</strong> — Intel Gen 8+ atau AMD Ryzen 3000+</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Rekomendasi</h2>

      <div className="space-y-4">
        {products.map((p) => (
          <div key={p.name} className="rounded-xl p-5 flex items-center justify-between gap-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div>
              <h4 className="font-semibold">{p.name}</h4>
              <div className="flex items-center gap-3 mt-1">
                <span className="font-bold" style={{ color: "var(--green)" }}>{p.price}</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--bg-hover)", color: "var(--text-secondary)" }}>{p.note}</span>
              </div>
            </div>
            <a href={p.url} target="_blank" rel="noopener noreferrer nofollow" className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold" style={{ background: "var(--accent)", color: "white" }}>
              Beli →
            </a>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Verdict</h2>
      <p style={{ color: "var(--text-secondary)" }}>
        <strong>Best Value:</strong> Beelink SEi10 — 3.3 juta, RAM 16GB, cukup untuk 90% use case.
      </p>
      <p style={{ color: "var(--text-secondary)" }}>
        <strong>Budget:</strong> Beelink SEi8 — 2.7 juta, cocok untuk mulai eksplor.
      </p>

      <div className="mt-8 rounded-xl p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
        <h3 className="font-semibold mb-3">🔗 Artikel Terkait</h3>
        <ul className="space-y-2 list-none p-0">
          <li><Link href="/comparisons" style={{ color: "var(--accent)" }}>Raspberry Pi 5 vs Mini PC</Link></li>
          <li><Link href="/tutorials" style={{ color: "var(--accent)" }}>Cara Setup AI Agent di Rumah</Link></li>
        </ul>
      </div>
    </article>
  );
}
