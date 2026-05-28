export default function Footer() {
  return (
    <footer className="border-t py-8 bg-white" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🤖</span>
            <span className="font-bold text-blue-600">AgentVerse</span>
          </div>
          <p className="text-xs text-center" style={{ color: "var(--text-secondary)" }}>
            Artikel review mengandung link affiliate. Kami mendapat komisi jika Anda membeli melalui link tersebut tanpa biaya tambahan.
          </p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} AgentVerse
          </p>
        </div>
      </div>
    </footer>
  );
}
