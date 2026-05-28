export const metadata = {
  title: "Tutorials — Setup AI Agent, n8n, Ollama",
  description:
    "Tutorial step-by-step setup AI agent di rumah, install Ollama, n8n automation, dan self-hosted services.",
};

export default function TutorialsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">📚 Tutorials</h1>
      <p className="text-gray-400 mb-8">
        Panduan lengkap setup AI agent dari nol.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2">
            Cara Setup AI Agent di Rumah
          </h3>
          <p className="text-gray-400 text-sm">
            Segera hadir — step-by-step dari nol sampai jalan.
          </p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2">
            Install Ollama di Ubuntu
          </h3>
          <p className="text-gray-400 text-sm">
            Segera hadir — jalankan LLM lokal dalam 5 menit.
          </p>
        </div>
      </div>
    </div>
  );
}
