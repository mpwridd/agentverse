import ArticleCard from "@/components/ArticleCard";

const articles = [
  {
    title: "10 Mini PC Terbaik untuk AI Agent 2026",
    excerpt:
      "Rekomendasi Mini PC terbaik untuk menjalankan AI agent, local LLM, dan automation. Budget mulai 2 jutaan hingga flagship.",
    slug: "mini-pc-ai-terbaik-2026",
    category: "Review",
    date: "Mei 2026",
  },
];

export const metadata = {
  title: "Reviews — Mini PC, Raspberry Pi, AI Tools",
  description:
    "Review lengkap Mini PC, Raspberry Pi, dan tools AI terbaik untuk home lab.",
};

export default function ReviewsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">⭐ Reviews</h1>
      <p className="text-gray-400 mb-8">
        Review jujur Mini PC, Raspberry Pi, dan tools AI terbaik.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((a) => (
          <ArticleCard key={a.slug} {...a} />
        ))}
      </div>
    </div>
  );
}
