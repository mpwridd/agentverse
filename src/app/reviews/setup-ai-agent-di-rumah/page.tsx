import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cara Install Proxmox di Mini PC + Setup AI Agent",
  description: "Panduan lengkap dari nol: install Proxmox VE di Mini PC, bikin VM, jalankan Ollama + AI Agent. Selesai dalam 30 menit.",
};

export default function SetupAIAgent() {
  return (
    <article className="max-w-none">
      <Link href="/reviews" className="text-sm mb-6 inline-block text-blue-600 hover:text-blue-700">
        ← Kembali ke Reviews
      </Link>

      <div className="flex items-center gap-3 text-xs mb-6">
        <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 font-medium">Tutorial</span>
        <span style={{ color: "var(--text-secondary)" }}>Mei 2026 · 12 menit baca</span>
      </div>

      <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        Cara Install Proxmox di Mini PC + Setup AI Agent
      </h1>

      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Panduan lengkap dari nol: install Proxmox VE di Mini PC, bikin VM Ubuntu,
        jalankan Ollama + AI Agent di dalam VM. Selesai dalam 30 menit. Punya VPS pribadi selamanya.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Yang Dibutuhkan
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li><strong style={{ color: "var(--text-primary)" }}>Mini PC</strong> — RAM minimal 16GB, SSD 256GB+ (lihat <Link href="/reviews/mini-pc-ai-terbaik-2026" className="text-blue-600 hover:text-blue-700">rekomendasi</Link>)</li>
        <li><strong style={{ color: "var(--text-primary)" }}>USB Flash Drive 8GB+</strong> — untuk installer Proxmox</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Rufus</strong> — tool untuk flash ISO ke USB (<a href="https://github.com/pbatard/rufus/releases" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">download</a>)</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Proxmox VE ISO</strong> — download dari <a href="https://www.proxmox.com/en/downloads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">proxmox.com</a></li>
        <li><strong style={{ color: "var(--text-primary)" }}>30 menit waktu</strong> — dari flash sampai AI Agent jalan</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Step 1: Flash Proxmox ISO ke USB
      </h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li>Download <strong>Rufus</strong> dan <strong>Proxmox VE ISO</strong></li>
        <li>Buka Rufus, pilih USB Flash Drive</li>
        <li>Klik SELECT, pilih file ISO Proxmox</li>
        <li>Klik START. Tunggu sampai selesai (~2 menit)</li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Step 2: Install Proxmox VE
      </h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li>Colokan USB ke Mini PC, nyalakan</li>
        <li>Masuk BIOS (biasanya tekan DEL atau F2 saat boot)</li>
        <li>Set boot priority ke USB</li>
        <li>Pilih Install Proxmox VE (Graphical)</li>
        <li>Pilih target disk (SSD Mini PC)</li>
        <li>Set timezone: Asia/Jakarta</li>
        <li>Set password dan email admin</li>
        <li>Set IP address: contoh <code className="bg-gray-100 px-1 rounded">192.168.1.100</code></li>
        <li>Tunggu install selesai (~5 menit)</li>
        <li>Cabut USB, reboot</li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Step 3: Akses Proxmox Web UI
      </h2>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        Setelah reboot, Proxmox akan tampil di layar dengan IP address. Buka di browser:
      </p>
      <div className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto" style={{ color: "var(--text-primary)" }}>
        <code>https://192.168.1.100:8006</code>
      </div>
      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Login dengan username <code className="bg-gray-100 px-1 rounded">root</code> dan password yang tadi dibuat.
        Browser akan warning &quot;not secure&quot; — ini normal karena self-signed certificate. Klik Advanced → Proceed.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Step 4: Bikin VM Ubuntu
      </h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li>Download Ubuntu Server 24.04 ISO</li>
        <li>Di Proxmox: Datacenter → Storage → local → Upload ISO</li>
        <li>Klik Create VM:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Name: <code className="bg-gray-100 px-1 rounded">ai-agent</code></li>
            <li>OS: Ubuntu 24.04</li>
            <li>Disk: 50GB</li>
            <li>CPU: 4 cores</li>
            <li>RAM: 8192MB (8GB)</li>
            <li>Network: Bridge (vmbr0)</li>
          </ul>
        </li>
        <li>Start VM dan install Ubuntu seperti biasa</li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Step 5: Install Ollama di VM
      </h2>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        SSH ke VM Ubuntu, lalu install Ollama:
      </p>
      <div className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto" style={{ color: "var(--text-primary)" }}>
        <code># Install Ollama<br/>
          curl -fsSL https://ollama.com/install.sh | sh<br/><br/>
          # Download model ringan<br/>
          ollama pull phi3:mini<br/><br/>
          # Test<br/>
          ollama run phi3:mini
        </code>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Step 6: Install n8n (Automation)
      </h2>
      <div className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto" style={{ color: "var(--text-primary)" }}>
        <code># Install Docker<br/>
          curl -fsSL https://get.docker.com | sh<br/><br/>
          # Jalankan n8n<br/>
          docker run -d --restart always \<br/>
          &nbsp;&nbsp;-p 5678:5678 \<br/>
          &nbsp;&nbsp;-v n8n_data:/home/node/.n8n \<br/>
          &nbsp;&nbsp;n8nio/n8n
        </code>
      </div>
      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Buka <code className="bg-gray-100 px-1 rounded">http://192.168.1.101:5678</code> (IP VM) untuk mulai bikin workflow automation.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Step 7: Hubungkan Ollama ke n8n
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li>Di n8n, tambahkan AI Agent node</li>
        <li>Pilih Ollama sebagai provider</li>
        <li>Base URL: <code className="bg-gray-100 px-1 rounded">http://localhost:11434</code></li>
        <li>Model: <code className="bg-gray-100 px-1 rounded">phi3:mini</code></li>
        <li>Hubungkan ke trigger (Telegram, Webhook, atau Schedule)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Arsitektur Akhir
      </h2>
      <div className="bg-gray-50 rounded-lg p-6 mb-6 font-mono text-sm" style={{ color: "var(--text-primary)" }}>
        <code>
          Mini PC (Proxmox Host)<br/>
          ├── VM 1: Ubuntu Server<br/>
          │&nbsp;&nbsp;&nbsp;├── Ollama (AI/LLM)<br/>
          │&nbsp;&nbsp;&nbsp;├── n8n (Automation)<br/>
          │&nbsp;&nbsp;&nbsp;└── Docker containers<br/>
          ├── VM 2: (opsional)<br/>
          │&nbsp;&nbsp;&nbsp;└── CasaOS / NAS / dll<br/>
          └── Proxmox Web UI: :8006<br/>
        </code>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Rekomendasi Hardware
      </h2>

      <div className="space-y-4">
        {[
          { name: "Beelink SEi8 i5 16/500GB", price: "Rp 2.799.000", note: "Budget terbaik", url: "https://shopee.co.id/Beelink-SEi8-i.1070891797.20293439189?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
          { name: "Beelink SEi10 i5 16/500GB", price: "Rp 3.299.000", note: "Best value", url: "https://shopee.co.id/Beelink-SEi10-i.15438867.22681138325?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
          { name: "Raspberry Pi 5 8GB Paket", price: "Rp 4.200.000", note: "Low power", url: "https://shopee.co.id/Raspberry-Pi-5-8GB-i.995354751.27455041254?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
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
      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Setup Proxmox + AI Agent ternyata gampang. Dengan Mini PC Rp 2.8 jutaan dan 30 menit waktu,
        lo sudah punya VPS pribadi yang bisa jalanin AI Agent, automation, dan self-hosted services 24/7.
        Total biaya listrik hanya ~Rp 30-50 ribu per bulan. Jauh lebih murah dari cloud VPS.
      </p>

      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h3 className="font-semibold mb-3 text-blue-800">🔗 Artikel Terkait</h3>
        <ul className="space-y-2 list-none p-0">
          <li><Link href="/reviews/mini-pc-ai-terbaik-2026" className="text-blue-600 hover:text-blue-700">10 Mini PC Terbaik untuk Proxmox 2026</Link></li>
          <li><Link href="/reviews/raspberry-pi-5-vs-mini-pc" className="text-blue-600 hover:text-blue-700">Mini PC vs VPS Cloud</Link></li>
        </ul>
      </div>
    </article>
  );
}
