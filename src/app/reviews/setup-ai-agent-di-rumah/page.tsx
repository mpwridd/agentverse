import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cara Install Proxmox di Mini PC + Setup AI Agent",
  description:
    "Panduan lengkap dari nol: install Proxmox VE (terminal mode) di Mini PC, bikin VM, jalankan Hermes Agent + AI. Selesai dalam 30 menit.",
};

const products = [
  {
    name: "Lenovo ThinkCentre M910q i5 Gen 7 8GB/256GB",
    price: "Rp 1.500.000",
    note: "Budget",
    url: "https://s.shopee.co.id/2BC5Je6aDR?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Dell OptiPlex 3050 i5-6500T 8GB/256GB",
    price: "Rp 1.800.000",
    note: "Value",
    url: "https://s.shopee.co.id/1gFok4DBKV?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Beelink SEi8 i5-8279U 16/500GB",
    price: "Rp 2.799.000",
    note: "Best Value",
    url: "https://s.shopee.co.id/4Va06EWqTK?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "LAN Cable Cat6",
    price: "",
    note: "Aksesoris",
    url: "https://s.shopee.co.id/20sf7WWbrv?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Keyboard ROBOT RK10",
    price: "",
    note: "Aksesoris",
    url: "https://s.shopee.co.id/1VwOXoz07t?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
];

const vmSpecs = [
  { label: "Name", value: "ai-agent" },
  { label: "OS", value: "Ubuntu Server 24.04" },
  { label: "CPU", value: "4 cores (sesuaikan kebutuhan)" },
  { label: "RAM", value: "8192MB / 8GB (min 4GB, max 16GB+)" },
  { label: "Disk", value: "50GB (min 20GB, recommended 100GB+)" },
  { label: "Network", value: "Bridge (vmbr0)" },
];

export default function SetupAIAgent() {
  return (
    <article className="max-w-none">
      <Link
        href="/reviews"
        className="text-sm mb-6 inline-block text-blue-600 hover:text-blue-700"
      >
        ← Kembali ke Reviews
      </Link>

      <div className="flex items-center gap-3 text-xs mb-6">
        <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 font-medium">
          Tutorial
        </span>
        <span style={{ color: "var(--text-secondary)" }}>
          Mei 2026 · 12 menit baca
        </span>
      </div>

      <h1
        className="text-3xl font-bold mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Cara Install Proxmox di Mini PC + Setup AI Agent
      </h1>

      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Panduan lengkap dari nol: install Proxmox VE (terminal mode) di Mini PC,
        bikin VM, jalankan Hermes Agent + AI. Selesai dalam 30 menit. Punya VPS
        pribadi selamanya.
      </p>

      {/* Video Tutorial */}
      <h2
        className="text-2xl font-bold mt-8 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Video Tutorial
      </h2>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        Tonton video berikut untuk panduan visual install Proxmox + setup server
        dari nol:
      </p>
      <div
        className="mb-8 rounded-xl overflow-hidden border"
        style={{ borderColor: "var(--border)" }}
      >
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/9KzI3GiZsrA"
          title="Tutorial Install Proxmox di Mini PC"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Yang Dibutuhkan */}
      <h2
        className="text-2xl font-bold mt-8 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Yang Dibutuhkan
      </h2>
      <ul
        className="list-disc pl-6 mb-6 space-y-2"
        style={{ color: "var(--text-secondary)" }}
      >
        <li>
          <strong style={{ color: "var(--text-primary)" }}>Mini PC</strong> —
          RAM minimal 16GB, SSD 256GB+ (lihat{" "}
          <Link
            href="/reviews/mini-pc-ai-terbaik-2026"
            className="text-blue-600 hover:text-blue-700"
          >
            rekomendasi
          </Link>
          )
        </li>
        <li>
          <strong style={{ color: "var(--text-primary)" }}>
            USB Flash Drive 8GB+
          </strong>{" "}
          — untuk installer Proxmox
        </li>
        <li>
          <strong style={{ color: "var(--text-primary)" }}>Rufus</strong> — tool
          untuk flash ISO ke USB (
          <a
            href="https://github.com/pbatard/rufus/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            download
          </a>
          )
        </li>
        <li>
          <strong style={{ color: "var(--text-primary)" }}>
            Proxmox VE ISO
          </strong>{" "}
          — download dari{" "}
          <a
            href="https://www.proxmox.com/en/downloads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            proxmox.com
          </a>
        </li>
        <li>
          <strong style={{ color: "var(--text-primary)" }}>
            30 menit waktu
          </strong>{" "}
          — dari flash sampai AI Agent jalan
        </li>
      </ul>

      {/* Step 1 */}
      <h2
        className="text-2xl font-bold mt-8 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Step 1: Flash Proxmox ISO ke USB
      </h2>
      <ol
        className="list-decimal pl-6 mb-6 space-y-2"
        style={{ color: "var(--text-secondary)" }}
      >
        <li>
          Download{" "}
          <strong>Rufus</strong> (
          <a
            href="https://github.com/pbatard/rufus/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            link
          </a>
          ) dan <strong>Proxmox VE ISO</strong>
        </li>
        <li>Buka Rufus, pilih USB Flash Drive</li>
        <li>Klik SELECT, pilih file ISO Proxmox</li>
        <li>Klik START. Tunggu sampai selesai (~2 menit)</li>
      </ol>

      {/* Step 2 */}
      <h2
        className="text-2xl font-bold mt-8 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Step 2: Install Proxmox VE (Terminal Mode)
      </h2>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        Colok USB ke Mini PC, nyalakan. Masuk BIOS (tekan DEL atau F2 saat
        boot), set boot priority ke USB. Saat boot menu muncul,{" "}
        <strong style={{ color: "var(--text-primary)" }}>
          pilih <code className="bg-gray-100 px-1 rounded">Install Proxmox VE (Terminal)</code>
        </strong>{" "}
        — bukan graphical mode. Lebih ringan dan cepat.
      </p>
      <ol
        className="list-decimal pl-6 mb-6 space-y-2"
        style={{ color: "var(--text-secondary)" }}
      >
        <li>
          Pilih target disk (SSD Mini PC) — hati-hati jangan salah pilih
        </li>
        <li>
          Set timezone:{" "}
          <code className="bg-gray-100 px-1 rounded">Asia/Jakarta</code>
        </li>
        <li>Set password dan email admin</li>
        <li>
          Set IP address: contoh{" "}
          <code className="bg-gray-100 px-1 rounded">192.168.1.100</code>
        </li>
        <li>
          Set hostname: contoh{" "}
          <code className="bg-gray-100 px-1 rounded">proxmox</code>
        </li>
        <li>Tunggu install selesai (~5 menit)</li>
        <li>Cabut USB, reboot</li>
      </ol>

      {/* Step 3 */}
      <h2
        className="text-2xl font-bold mt-8 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Step 3: Akses Proxmox Web UI
      </h2>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        Setelah reboot, Proxmox akan tampil di layar dengan IP address. Buka di
        browser:
      </p>
      <div
        className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto"
        style={{ color: "var(--text-primary)" }}
      >
        <code>https://192.168.1.100:8006</code>
      </div>
      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Login dengan username{" "}
        <code className="bg-gray-100 px-1 rounded">root</code> dan password
        yang tadi dibuat. Browser akan warning &quot;not secure&quot; — ini
        normal karena self-signed certificate. Klik Advanced → Proceed.
      </p>

      {/* Step 4 */}
      <h2
        className="text-2xl font-bold mt-8 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Step 4: Bikin VM Ubuntu
      </h2>
      <ol
        className="list-decimal pl-6 mb-4 space-y-2"
        style={{ color: "var(--text-secondary)" }}
      >
        <li>Download Ubuntu Server 24.04 ISO</li>
        <li>
          Di Proxmox: Datacenter → Storage → local → Upload ISO
        </li>
        <li>Klik Create VM dengan specs berikut:</li>
      </ol>

      {/* VM Specs Table */}
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th
                className="text-left p-3 border font-semibold"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                Parameter
              </th>
              <th
                className="text-left p-3 border font-semibold"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                Nilai
              </th>
            </tr>
          </thead>
          <tbody style={{ color: "var(--text-secondary)" }}>
            {vmSpecs.map((s) => (
              <tr key={s.label}>
                <td
                  className="p-3 border font-medium"
                  style={{ borderColor: "var(--border)" }}
                >
                  {s.label}
                </td>
                <td
                  className="p-3 border"
                  style={{ borderColor: "var(--border)" }}
                >
                  {s.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="bg-yellow-50 rounded-lg p-4 mb-6 border border-yellow-200"
        style={{ color: "var(--text-secondary)" }}
      >
        <p className="text-sm">
          <strong className="text-yellow-800">💡 Catatan:</strong> Sesuaikan
          specs berdasarkan kebutuhan. Misalnya untuk AI Agent, butuh RAM lebih
          besar (16GB+). Untuk web server ringan, 4GB cukup.
        </p>
      </div>

      <ol
        className="list-decimal pl-6 mb-6 space-y-2"
        style={{ color: "var(--text-secondary)" }}
        start={4}
      >
        <li>Start VM dan install Ubuntu Server seperti biasa</li>
        <li>Setelah install selesai, reboot dan login via SSH atau console</li>
      </ol>

      {/* Step 5 */}
      <h2
        className="text-2xl font-bold mt-8 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Step 5: Install OpenClaw & Hermes Agent di VM
      </h2>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        SSH ke VM Ubuntu, lalu install OpenClaw dan Hermes Agent:
      </p>
      <div
        className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto"
        style={{ color: "var(--text-primary)" }}
      >
        <code>
          {"# Install OpenClaw (AI Agent framework)\n"}
          {"curl -fsSL https://openclaw.ai/install.sh | bash\n\n"}
          {"# Install Hermes Agent\n"}
          {"curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash\n\n"}
          {"# Konfigurasi API Key (lihat Step 6)\n"}
          {"hermes configure\n"}
        </code>
      </div>
      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Pilih salah satu atau install keduanya. OpenClaw dan Hermes Agent
        adalah framework AI agent yang bisa jalan di mana saja. Konfigurasi
        dengan API key dari provider yang kamu pilih (lihat Step 6 di bawah).
      </p>

      {/* Step 6 */}
      <h2
        className="text-2xl font-bold mt-8 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Step 6: Dapatkan API Key
      </h2>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        Hermes Agent membutuhkan API key untuk mengakses model AI. Beberapa
        opsi:
      </p>

      <h3
        className="text-lg font-semibold mt-6 mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        Opsi A: OpenRouter (Free Tier)
      </h3>
      <ul
        className="list-disc pl-6 mb-4 space-y-2"
        style={{ color: "var(--text-secondary)" }}
      >
        <li>
          Kunjungi{" "}
          <a
            href="https://openrouter.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            openrouter.ai
          </a>
        </li>
        <li>Buat akun dan dapatkan API key</li>
        <li>
          Banyak model gratis tersedia — cukup untuk mulai eksperimen
        </li>
      </ul>

      <h3
        className="text-lg font-semibold mt-6 mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        Opsi B: Xiaomi MiMo (Gratis)
      </h3>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        Xiaomi MiMo adalah model AI gratis yang kompatibel dengan format
        OpenAI. Langsung pakai:
      </p>
      <div
        className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto"
        style={{ color: "var(--text-primary)" }}
      >
        <code>
          {"Base URL: https://token-plan-sgp.xiaomimimo.com/v1\n"}
          {"API Key: tp-stsslosuvgflh0osdfbden4oe9eus1yeadj76nlfslg8f811\n"}
        </code>
      </div>

      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Selain kedua opsi di atas, Hermes Agent juga kompatibel dengan{" "}
        <strong style={{ color: "var(--text-primary)" }}>
          semua API yang mendukung format OpenAI
        </strong>{" "}
        — termasuk OpenAI, Anthropic (via proxy), Groq, Together AI, dan
        lainnya.
      </p>

      {/* Arsitektur */}
      <h2
        className="text-2xl font-bold mt-8 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Arsitektur Akhir
      </h2>
      <div
        className="bg-gray-50 rounded-lg p-6 mb-6 font-mono text-sm"
        style={{ color: "var(--text-primary)" }}
      >
        <code>
          {"Mini PC (Proxmox Host)\n"}
          {"└── VM: Ubuntu Server 24.04\n"}
          {"    └── Hermes Agent\n"}
          {"        └── API\n"}
          {"            ├── OpenRouter (free tier)\n"}
          {"            └── Xiaomi MiMo (gratis)\n"}
        </code>
      </div>

      {/* Rekomendasi Hardware */}
      <h2
        className="text-2xl font-bold mt-8 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Rekomendasi Hardware
      </h2>

      <div className="space-y-4">
        {products.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-xl p-5 flex items-center justify-between gap-4 border hover:shadow-md transition"
            style={{ borderColor: "var(--border)" }}
          >
            <div>
              <h4
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {p.name}
              </h4>
              <div className="flex items-center gap-3 mt-1">
                {p.price && (
                  <span className="font-bold text-green-600">{p.price}</span>
                )}
                <span
                  className="text-xs px-2 py-0.5 rounded-full bg-gray-100"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {p.note}
                </span>
              </div>
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Beli →
            </a>
          </div>
        ))}
      </div>

      {/* Verdict */}
      <h2
        className="text-2xl font-bold mt-8 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Verdict
      </h2>
      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Setup Proxmox + Hermes Agent ternyata gampang. Dengan Mini PC Rp 1.5
        jutaan dan 30 menit waktu, lo sudah punya VPS pribadi yang bisa jalanin
        AI Agent 24/7. Total biaya listrik hanya ~Rp 30-50 ribu per bulan. Jauh
        lebih murah dari cloud VPS. Dan yang paling penting: semua data lo tetap
        di rumah, bukan di server orang lain.
      </p>

      {/* Artikel Terkait */}
      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h3 className="font-semibold mb-3 text-blue-800">
          🔗 Artikel Terkait
        </h3>
        <ul className="space-y-2 list-none p-0">
          <li>
            <Link
              href="/reviews/mini-pc-ai-terbaik-2026"
              className="text-blue-600 hover:text-blue-700"
            >
              10 Mini PC Terbaik untuk Proxmox 2026
            </Link>
          </li>
          <li>
            <Link
              href="/reviews/raspberry-pi-5-vs-mini-pc"
              className="text-blue-600 hover:text-blue-700"
            >
              Mini PC vs VPS Cloud: Mana yang Lebih Worth?
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
