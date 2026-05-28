import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
  image?: string;
}

export default function ArticleCard({
  title,
  excerpt,
  slug,
  category,
  date,
}: ArticleCardProps) {
  return (
    <article
      className="rounded-xl p-6 transition-all duration-200 group"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(108,140,255,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div className="flex items-center gap-2 text-xs mb-4">
        <span
          className="px-2.5 py-1 rounded-full font-medium"
          style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
        >
          {category}
        </span>
        <span style={{ color: "var(--text-secondary)" }}>{date}</span>
      </div>
      <Link href={`/reviews/${slug}`}>
        <h3
          className="text-lg font-semibold mb-2 transition-colors"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>
      </Link>
      <p className="text-sm line-clamp-3 mb-4" style={{ color: "var(--text-secondary)" }}>
        {excerpt}
      </p>
      <Link
        href={`/reviews/${slug}`}
        className="inline-flex items-center gap-1 text-sm font-medium transition-opacity"
        style={{ color: "var(--accent)" }}
      >
        Baca selengkapnya
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 12l4-4-4-4" />
        </svg>
      </Link>
    </article>
  );
}
