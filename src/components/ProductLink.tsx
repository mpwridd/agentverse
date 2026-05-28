interface ProductLinkProps {
  name: string;
  url: string;
  price?: string;
  note?: string;
}

export default function ProductLink({ name, url, price, note }: ProductLinkProps) {
  return (
    <div
      className="rounded-xl p-5 my-4 flex items-center justify-between gap-4 transition-all duration-200"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-base mb-1" style={{ color: "var(--text-primary)" }}>
          {name}
        </h4>
        <div className="flex items-center gap-3">
          {price && (
            <span className="font-bold text-lg" style={{ color: "var(--green)" }}>
              {price}
            </span>
          )}
          {note && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--bg-hover)", color: "var(--text-secondary)" }}>
              {note}
            </span>
          )}
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
        style={{
          background: "var(--accent)",
          color: "white",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.9";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Beli di Shopee →
      </a>
    </div>
  );
}
