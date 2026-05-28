export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
      <p>
        © {new Date().getFullYear()} AgentVerse. Artikel review mengandung
        link affiliate. Kami mendapat komisi jika Anda membeli melalui link
        tersebut tanpa biaya tambahan.
      </p>
    </footer>
  );
}
