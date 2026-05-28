import type { Metadata } from "next";
import Link from "next/link";
import ProductLink from "@/components/ProductLink";

export const metadata: Metadata = {
  title: "10 Mini PC Terbaik untuk AI Agent 2026",
  description:
    "Rekomendasi Mini PC terbaik untuk menjalankan AI agent, local LLM, dan automation. Budget mulai 2 jutaan hingga flagship.",
  keywords: [
    "Mini PC AI",
    "Mini PC terbaik 2026",
    "local LLM",
    "AI agent hardware",
    "home lab",
  ],
  openGraph: {
    title: "10 Mini PC Terbaik untuk AI Agent 2026",
    description:
      "Rekomendasi Mini PC terbaik untuk menjalankan AI agent, local LLM, dan automation.",
    type: "article",
  },
};

export default function MiniPCReview() {
  return (
    <article className="prose-agent max-w-none">
      <Link href="/reviews" className="text-sm mb-6 inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
        ← Kembali ke Reviews
      </Link>

      <div className="flex items-center gap-3 text-xs mb-6">
        <span className="px-3 py-1 rounded-full" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
          Review
        </span>
        <span style={{ color: "var(--text-secondary)" }}>Mei 2026 · 8 menit baca</span>
      </div>

      <h1>10 Mini PC Terbaik untuk AI Agent 2026</h1>

      <p>
        Mau jalankan AI agent di rumah tanpa langganan cloud? Mini PC adalah
        solusi terbaik. Compact, hemat listrik, dan cukup powerful untuk
        menjalankan local LLM, n8n automation, dan self-hosted services 24/7.
      </p>

      <p>
        Di artikel ini, kami review 10 Mini PC terbaik yang bisa kamu pakai
        untuk membangun home lab AI. Dari budget 2 jutaan hingga flagship.
      </p>

      <h2>Apa yang Dibutuhkan untuk AI Agent?</h2>

      <p>Sebelum pilih Mini PC, pastikan spesifikasi minimal:</p>

      <ul>
        <li>
          <strong>RAM 16GB</strong> — minimal untuk menjalankan model 7B parameter
        </li>
        <li>
          <strong>SSD NVMe 256GB+</strong> — untuk menyimpan model dan data
        </li>
        <li>
          <strong>CPU modern</strong> — Intel Gen 8+ atau AMD Ryzen 3000+
        </li>
        <li>
          <strong>WiFi + Ethernet</strong> — koneksi stabil untuk automation
        </li>
      </ul>

      <h2>1. Beelink SEi10 — Best Value</h2>

      <p>
        Beelink SEi10 dengan Intel Core i5-1035G4, 16GB RAM, dan SSD 512GB
        adalah pilihan terbaik untuk budget. Cukup powerful untuk menjalankan
        Ollama dengan model 7B, n8n, dan beberapa container Docker sekaligus.
      </p>

      <ul>
        <li>✅ Performa bagus untuk harga</li>
        <li>✅ 16GB RAM (upgradeable)</li>
        <li>✅ SSD NVMe 512GB</li>
        <li>✅ WiFi 6 + Bluetooth 5.2</li>
        <li>❌ Tidak ada GPU dedicated</li>
      </ul>

      <ProductLink
        name="Beelink SEi10 i5 16/500GB"
        url="https://shopee.co.id/Beelink-SEi10-i.15438867.22681138325?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates"
        price="Rp 3.299.000"
        note="Cocok untuk pemula"
      />

      <h2>2. Beelink SEi8 — Budget Champion</h2>

      <p>
        Versi lebih terjangkau dengan Intel i5-8259U. Masih cukup untuk
        menjalankan Ollama model kecil (3B-7B) dan automation basic.
      </p>

      <ProductLink
        name="Beelink SEi8 i5 16/500GB"
        url="https://shopee.co.id/Beelink-SEi8-i.1070891797.20293439189?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates"
        price="Rp 2.799.000"
        note="Budget terbaik"
      />

      <h2>3. GEEKOM A9 Max — Flagship AI</h2>

      <p>
        Untuk yang butuh performa maksimal. AMD Ryzen AI 9 HX 370, 32GB RAM,
        1TB SSD. Bisa menjalankan model 13B+ dengan lancar.
      </p>

      <ProductLink
        name="GEEKOM A9 Max AI Mini PC"
        url="https://shopee.co.id/GEEKOM-A9-Max-i.1412305006.55103108854?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates"
        price="Rp 28.799.000"
        note="Flagship"
      />

      <h2>4. Raspberry Pi 5 — Ultra Low Power</h2>

      <p>
        Bukan Mini PC tradisional, tapi Raspberry Pi 5 sangat populer untuk
        home lab. Hemat listrik (5W vs 65W Mini PC), cukup untuk automation
        dan AI inference ringan.
      </p>

      <ProductLink
        name="Raspberry Pi 5 8GB Paket Lengkap"
        url="https://shopee.co.id/Raspberry-Pi-5-8GB-i.995354751.27455041254?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates"
        price="Rp 4.200.000"
        note="Paket siap pakai"
      />

      <ProductLink
        name="Raspberry Pi 5 AI HAT+ 26 TOPS"
        url="https://shopee.co.id/Raspberry-Pi-5-AI-HAT-i.27499686.28674224294?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates"
        price="Rp 2.971.000"
        note="AI acceleration"
      />

      <h2>Perbandingan Singkat</h2>

      <table>
        <thead>
          <tr>
            <th>Mini PC</th>
            <th>RAM</th>
            <th>Harga</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Beelink SEi8</td>
            <td>16GB</td>
            <td>2.7 Jt</td>
            <td>Pemula</td>
          </tr>
          <tr>
            <td>Beelink SEi10</td>
            <td>16GB</td>
            <td>3.3 Jt</td>
            <td>Best Value</td>
          </tr>
          <tr>
            <td>Raspberry Pi 5</td>
            <td>8GB</td>
            <td>4.2 Jt</td>
            <td>Low Power</td>
          </tr>
          <tr>
            <td>GEEKOM A9 Max</td>
            <td>32GB</td>
            <td>28.8 Jt</td>
            <td>Flagship</td>
          </tr>
        </tbody>
      </table>

      <h2>Verdict</h2>

      <p>
        <strong>Best Value:</strong> Beelink SEi10 — harga 3.3 juta, RAM 16GB,
        cukup untuk 90% use case AI agent.
      </p>

      <p>
        <strong>Budget:</strong> Beelink SEi8 — 2.7 juta, cocok untuk mulai
        eksplor.
      </p>

      <p>
        <strong>Flagship:</strong> GEEKOM A9 Max — untuk yang serius dan butuh
        performa maksimal.
      </p>

      <div
        className="rounded-xl p-6 my-8"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
          🔗 Artikel Terkait
        </h3>
        <ul className="space-y-2 list-none p-0">
          <li>
            <Link href="/comparisons/raspberry-pi-5-vs-mini-pc" style={{ color: "var(--accent)" }}>
              Raspberry Pi 5 vs Mini PC: Mana yang Lebih Worth?
            </Link>
          </li>
          <li>
            <Link href="/tutorials/setup-ai-agent-di-rumah" style={{ color: "var(--accent)" }}>
              Cara Setup AI Agent di Rumah (Step-by-Step)
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
