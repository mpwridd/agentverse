export const metadata = {
  title: "Comparisons — Head-to-Head AI Hardware",
  description:
    "Perbandingan Mini PC vs Raspberry Pi, Cloud vs Local, dan lainnya.",
};

export default function ComparisonsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">⚖️ Comparisons</h1>
      <p className="text-gray-400 mb-8">
        Perbandingan head-to-head hardware dan tools AI.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2">
            Raspberry Pi 5 vs Mini PC
          </h3>
          <p className="text-gray-400 text-sm">
            Segera hadir — perbandingan lengkap untuk home lab AI.
          </p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2">
            Cloud API vs Local LLM
          </h3>
          <p className="text-gray-400 text-sm">
            Segera hadir — mana yang lebih murah untuk jangka panjang?
          </p>
        </div>
      </div>
    </div>
  );
}
