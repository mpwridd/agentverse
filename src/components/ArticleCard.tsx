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
    <article className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition group">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
        <span className="bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded">
          {category}
        </span>
        <span>{date}</span>
      </div>
      <Link href={`/reviews/${slug}`}>
        <h3 className="text-lg font-semibold text-gray-100 group-hover:text-cyan-400 transition mb-2">
          {title}
        </h3>
      </Link>
      <p className="text-gray-400 text-sm line-clamp-3">{excerpt}</p>
      <Link
        href={`/reviews/${slug}`}
        className="inline-block mt-4 text-cyan-400 text-sm hover:underline"
      >
        Baca selengkapnya →
      </Link>
    </article>
  );
}
