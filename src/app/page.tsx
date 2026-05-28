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
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          🤖 <span className="text-cyan-400">AgentVerse</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Review, tutorial, dan rekomendasi tools terbaik untuk membangun AI
          agent di rumah. Mini PC, Raspberry Pi, kursus AI, dan automation.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Link
            href="/reviews"
            className="bg-cyan-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            Lihat Reviews
          </Link>
          <Link
            href="/tutorials"
            className="border border-gray-700 text-gray-300 px-6 py-2 rounded-lg hover:border-cyan-500 transition"
          >
            Tutorials
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">📝 Artikel Terbaru</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <ArticleCard key={a.slug} {...a} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">📂 Kategori</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Reviews", href: "/reviews", icon: "⭐" },
            { name: "Comparisons", href: "/comparisons", icon: "⚖️" },
            { name: "Tutorials", href: "/tutorials", icon: "📚" },
            { name: "Deals", href: "/deals", icon: "🔥" },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-cyan-500/50 transition"
            >
              <span className="text-2xl">{c.icon}</span>
              <p className="text-sm mt-2 text-gray-300">{c.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
