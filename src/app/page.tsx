import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

const articles = [
  {
    title: "10 Mini PC Terbaik untuk AI Agent 2026",
    excerpt:
      "Rekomendasi Mini PC terbaik untuk menjalankan AI agent, local LLM, dan automation. Budget mulai 2 jutaan hingga flagship.",
    slug: "mini-pc-ai-terbaik-2026",
    category: "Review",
    date: "Mei 2026",
  },
  {
    title: "Raspberry Pi 5 vs Mini PC: Mana yang Lebih Worth?",
    excerpt:
      "Perbandingan lengkap Raspberry Pi 5 dan Mini PC untuk home lab AI. Dari harga, performa, hingga use case terbaik.",
    slug: "raspberry-pi-5-vs-mini-pc",
    category: "Comparison",
    date: "Mei 2026",
  },
  {
    title: "Cara Setup AI Agent di Rumah (Step-by-Step)",
    excerpt:
      "Panduan lengkap setup AI agent dari nol. Install Ollama, n8n, dan jalankan automation 24/7 tanpa langganan cloud.",
    slug: "setup-ai-agent-di-rumah",
    category: "Tutorial",
    date: "Mei 2026",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="text-center py-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--green)" }}></span>
          Panduan Lengkap AI Agent di Rumah
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
          Bangun <span style={{ color: "var(--accent)" }}>AI Agent</span> di Rumah
          <br />
          Tanpa Langganan Cloud
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "var(--text-secondary)" }}>
          Review Mini PC, Raspberry Pi, dan tools automation terbaik.
          Setup sekali, jalan 24/7, hemat jutaan per bulan.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href="/reviews"
            className="px-6 py-3 rounded-lg font-semibold transition-all"
            style={{ background: "var(--accent)", color: "white" }}
          >
            Lihat Reviews →
          </Link>
          <Link
            href="/tutorials"
            className="px-6 py-3 rounded-lg font-semibold transition-all"
            style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
          >
            Mulai Tutorial
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-4 mb-16">
        {[
          { value: "10+", label: "Mini PC Reviewed" },
          { value: "5+", label: "Tutorial Lengkap" },
          { value: "24/7", label: "Automation Jalan" },
        ].map((s) => (
          <div
            key={s.label}
            className="text-center p-4 rounded-xl"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div className="text-2xl font-bold mb-1" style={{ color: "var(--accent)" }}>{s.value}</div>
            <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Latest Articles */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            📝 Artikel Terbaru
          </h2>
          <Link href="/reviews" className="text-sm font-medium" style={{ color: "var(--accent)" }}>
            Lihat semua →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <ArticleCard key={a.slug} {...a} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          📂 Kategori
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Reviews", href: "/reviews", icon: "⭐", desc: "Hardware & tools" },
            { name: "Comparisons", href: "/comparisons", icon: "⚖️", desc: "Head-to-head" },
            { name: "Tutorials", href: "/tutorials", icon: "📚", desc: "Step-by-step" },
            { name: "Deals", href: "/deals", icon: "🔥", desc: "Harga terbaik" },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-xl p-5 text-center transition-all duration-200"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span className="text-3xl">{c.icon}</span>
              <p className="font-semibold mt-2" style={{ color: "var(--text-primary)" }}>{c.name}</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="mt-16 rounded-2xl p-8 text-center"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          Siap Bangun AI Agent?
        </h2>
        <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
          Mulai dari Rp 2.7 juta. Setup 30 menit. Jalan 24/7 tanpa biaya bulanan.
        </p>
        <Link
          href="/reviews/mini-pc-ai-terbaik-2026"
          className="inline-block px-6 py-3 rounded-lg font-semibold transition-all"
          style={{ background: "var(--accent)", color: "white" }}
        >
          Lihat Rekomendasi Mini PC →
        </Link>
      </section>
    </div>
  );
}
