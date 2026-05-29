import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Mini PC Terbaik untuk Proxmox & AI Agent Server 2026",
  description: "Rekomendasi Mini PC terbaik untuk dijadikan server Proxmox. Jalankan AI Agent, VM, container, dan self-hosted services 24/7 di rumah.",
};

const products = [
  { name: "Beelink SEi8 i5-8259U 16/500GB", price: "Rp 2.799.000", note: "Budget terbaik", spec: "Intel i5-8259U, 16GB DDR4, 500GB NVMe", url: "https://shopee.co.id/Beelink-SEi8-i.1070891797.20293439189?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "Beelink SEi10 i5-1035G4 16/500GB", price: "Rp 3.299.000", note: "Best value", spec: "Intel i5-1035G4, 16GB DDR4, 500GB NVMe", url: "https://shopee.co.id/Beelink-SEi10-i.15438867.22681138325?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "Raspberry Pi 5 8GB Paket", price: "Rp 4.200.000", note: "Low power server", spec: "ARM Cortex-A76, 8GB LPDDR4X, microSD+NVMe", url: "https://shopee.co.id/Raspberry-Pi-5-8GB-i.995354751.27455041254?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "Raspberry Pi 5 AI HAT+", price: "Rp 2.971.000", note: "AI acceleration", spec: "ARM Cortex-A76 + AI HAT+ 13 TOPS", url: "https://shopee.co.id/Raspberry-Pi-5-AI-HAT-i.27499686.28674224294?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "GEEKOM A9 Max AI Mini PC", price: "Rp 28.799.000", note: "Flagship", spec: "AMD Ryzen 9, 32GB DDR5, 1TB NVMe", url: "https://shopee.co.id/GEEKOM-A9-Max-i.1412305006.55103108854?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
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
        10 Mini PC Terbaik untuk Proxmox & AI Agent Server 2026
      </h1>

      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Mau bikin VPS pribadi di rumah? Mini PC + Proxmox adalah kombinasi terbaik.
        Install Proxmox VE, bikin VM, jalankan AI Agent, Docker, dan self-hosted services
        — semua di satu mesin kecil yang hemat listrik.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Kenapa Mini PC + Proxmox?
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li><strong style={{ color: "var(--text-primary)" }}>VPS pribadi selamanya</strong> — bayar sekali, jalan terus. Tidak ada biaya bulanan.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Multi-VM</strong> — satu Mini PC bisa jalanin beberapa VM sekaligus (AI Agent, Docker, NAS, dll).</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Hemat listrik</strong> — 15-65W vs 200W+ untuk server rack.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Kompak</strong> — taruh di meja atau rak, tidak berisik.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Spesifikasi Minimum untuk Proxmox
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li><strong style={{ color: "var(--text-primary)" }}>RAM 16GB</strong> — minimal. Proxmox + 1 VM butuh ~8GB. 32GB recommended.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>SSD NVMe 256GB+</strong> — untuk OS Proxmox + disk VM. 512GB lebih lega.</li>
        <li><strong style={{ color: "var(--text-primary)" }}>CPU Intel Gen 8+ / AMD Ryzen</strong> — harus support VT-x/VT-d (Intel) atau AMD-V/IOMMU (AMD).</li>
        <li><strong style={{ color: "var(--text-primary)" }}>2x LAN</strong> — idealnya. Satu untuk WAN, satu untuk LAN/management.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Rekomendasi Mini PC
      </h2>

      <div className="space-y-4">
        {products.map((p) => (
          <div key={p.name} className="bg-white rounded-xl p-5 border hover:shadow-md transition" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold" style={{ color: "var(--text-primary)" }}>{p.name}</h4>
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-bold text-green-600">{p.price}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100" style={{ color: "var(--text-secondary)" }}>{p.note}</span>
                </div>
                <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>{p.spec}</p>
              </div>
              <a href={p.url} target="_blank" rel="noopener noreferrer nofollow" className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition">
                Beli →
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Verdict
      </h2>
      <p className="mb-2" style={{ color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--text-primary)" }}>Best Value:</strong> Beelink SEi10 — Rp 3.3 juta, i5 Gen 10, 16GB RAM. Cukup untuk Proxmox + 2-3 VM sekaligus.
      </p>
      <p className="mb-2" style={{ color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--text-primary)" }}>Budget:</strong> Beelink SEi8 — Rp 2.8 juta, i5 Gen 8. Cocok untuk mulai belajar Proxmox.
      </p>
      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--text-primary)" }}>Flagship:</strong> GEEKOM A9 Max — Rp 28.8 juta, Ryzen 9, 32GB DDR5. Untuk yang mau power maksimal.
      </p>

      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h3 className="font-semibold mb-3 text-blue-800">🔗 Artikel Terkait</h3>
        <ul className="space-y-2 list-none p-0">
          <li><Link href="/reviews/setup-ai-agent-di-rumah" className="text-blue-600 hover:text-blue-700">Cara Install Proxmox + Setup AI Agent</Link></li>
          <li><Link href="/reviews/raspberry-pi-5-vs-mini-pc" className="text-blue-600 hover:text-blue-700">Mini PC vs VPS Cloud: Mana yang Lebih Worth?</Link></li>
        </ul>
      </div>
    </article>
  );
}
