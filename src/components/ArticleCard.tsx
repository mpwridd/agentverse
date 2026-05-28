import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
}

export default function ArticleCard({
  title,
  excerpt,
  slug,
  category,
  date,
}: ArticleCardProps) {
  return (
    <article className="bg-white rounded-xl p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group" style={{ borderColor: "var(--border)" }}>
      <div className="flex items-center gap-2 text-xs mb-4">
        <span className="px-2.5 py-1 rounded-full font-medium bg-blue-50 text-blue-600">
          {category}
        </span>
        <span style={{ color: "var(--text-secondary)" }}>{date}</span>
      </div>
      <Link href={`/reviews/${slug}`}>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition" style={{ color: "var(--text-primary)" }}>
          {title}
        </h3>
      </Link>
      <p className="text-sm line-clamp-3 mb-4" style={{ color: "var(--text-secondary)" }}>
        {excerpt}
      </p>
      <Link
        href={`/reviews/${slug}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
      >
        Baca selengkapnya
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 12l4-4-4-4" />
        </svg>
      </Link>
    </article>
  );
}
