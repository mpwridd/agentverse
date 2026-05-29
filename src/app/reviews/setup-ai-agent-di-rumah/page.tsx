import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cara Setup AI Agent di Rumah (Step-by-Step)",
  description: "Panduan lengkap setup AI agent dari nol. Install Ollama, n8n, dan jalankan automation 24/7 tanpa langganan cloud.",
};

export default function SetupAIAgent() {
  return (
    <article className="max-w-none">
      <Link href="/reviews" className="text-sm mb-6 inline-block text-blue-600 hover:text-blue-700">
        ← Kembali ke Reviews
      </Link>

      <div className="flex items-center gap-3 text-xs mb-6">
        <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 font-medium">Tutorial</span>
        <span style={{ color: "var(--text-secondary)" }}>Mei 2026 · 10 menit baca</span>
      </div>

      <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        Cara Setup AI Agent di Rumah (Step-by-Step)
      </h1>

      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Mau jalankan AI agent sendiri di rumah? Ikuti panduan ini dari nol.
        Setup sekali, jalan 24/7, tanpa biaya bulanan. Hanya butuh Mini PC atau Raspberry Pi.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Yang Dibutuhkan
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li><strong style={{ color: "var(--text-primary)" }}>Mini PC atau Raspberry Pi</strong> — RAM minimal 8GB (16GB recommended)</li>
        <li><strong style={{ color: "var(--text-primary)" }}>MicroSD atau SSD</strong> — minimal 64GB untuk OS + model</li>
        <li><strong style={{ color: "var(--text-primary)" }}>Internet</strong> — untuk download model dan tools</li>
        <li><strong style={{ color: "var(--text-primary)" }}>30 menit waktu</strong> — setup dari nol sampai jalan</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Step 1: Install OS
      </h2>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        Gunakan Ubuntu Server 24.04 LTS untuk Mini PC, atau Raspberry Pi OS (64-bit) untuk Pi.
        Flash ke SSD/microSD menggunakan Raspberry Pi Imager atau balenaEtcher.
      </p>
      <div className="bg-gray-50 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto" style={{ color: "var(--text-primary)" }}>
        <code># Update system setelah install<br/>
          sudo apt update && sudo apt upgrade -y
        </code>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Step 2: Install Ollama (Local LLM)
      </h2>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        Ollama adalah cara termudah untuk menjalankan LLM lokal. Satu command untuk install:
      </p>
      <div className="bg-gray-50 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto" style={{ color: "var(--text-primary)" }}>
        <code>curl -fsSL https://ollama.com/install.sh | sh</code>
      </div>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        Download model yang ringan untuk mulai:
      </p>
      <div className="bg-gray-50 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto" style={{ color: "var(--text-primary)" }}>
        <code># Model ringan (2GB RAM)<br/>
          ollama pull phi3:mini<br/><br/>
          # Model menengah (8GB RAM)<br/>
          ollama pull llama3:8b<br/><br/>
          # Test<br/>
          ollama run phi3:mini
        </code>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Step 3: Install n8n (Automation)
      </h2>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        n8n adalah platform automation low-code. Jalankan dengan Docker:
      </p>
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
        Buka <code className="bg-gray-100 px-1 rounded">http://your-ip:5678</code> di browser untuk mulai bikin workflow.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Step 4: Hubungkan Ollama ke n8n
      </h2>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        Di n8n, tambahkan AI Agent node dan pilih Ollama sebagai provider:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: "var(--text-secondary)" }}>
        <li>Base URL: <code className="bg-gray-100 px-1 rounded">http://localhost:11434</code></li>
        <li>Model: <code className="bg-gray-100 px-1 rounded">phi3:mini</code> atau <code className="bg-gray-100 px-1 rounded">llama3:8b</code></li>
        <li>Hubungkan ke trigger (schedule, webhook, atau Telegram)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Step 5: Auto-Start saat Boot
      </h2>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        Pastikan semua service jalan otomatis saat reboot:
      </p>
      <div className="bg-gray-50 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto" style={{ color: "var(--text-primary)" }}>
        <code># Ollama sudah auto-start via systemd<br/>
          sudo systemctl enable ollama<br/><br/>
          # Docker container n8n sudah --restart always<br/>
          # Cek status:<br/>
          docker ps
        </code>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: "var(--text-primary)" }}>
        Rekomendasi Hardware
      </h2>

      <div className="space-y-4">
        {[
          { name: "Beelink SEi8 i5 16/500GB", price: "Rp 2.799.000", note: "Budget terbaik", url: "https://shopee.co.id/Beelink-SEi8-i.1070891797.20293439189?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
          { name: "Beelink SEi10 i5 16/500GB", price: "Rp 3.299.000", note: "Best value", url: "https://shopee.co.id/Beelink-SEi10-i.15438867.22681138325?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
          { name: "Raspberry Pi 5 8GB Paket", price: "Rp 4.200.000", note: "Paket siap pakai", url: "https://shopee.co.id/Raspberry-Pi-5-8GB-i.995354751.27455041254?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
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
        Setup AI agent di rumah ternyata gampang. Dengan Mini PC 2.7 jutaan dan 30 menit waktu,
        lo sudah bisa jalanin LLM + automation 24/7 tanpa biaya bulanan. Total biaya listrik
        hanya sekitar Rp 30-50 ribu per bulan.
      </p>

      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h3 className="font-semibold mb-3 text-blue-800">🔗 Artikel Terkait</h3>
        <ul className="space-y-2 list-none p-0">
          <li><Link href="/reviews/mini-pc-ai-terbaik-2026" className="text-blue-600 hover:text-blue-700">10 Mini PC Terbaik untuk AI Agent 2026</Link></li>
          <li><Link href="/reviews/raspberry-pi-5-vs-mini-pc" className="text-blue-600 hover:text-blue-700">Raspberry Pi 5 vs Mini PC</Link></li>
        </ul>
      </div>
    </article>
  );
}
