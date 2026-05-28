export const metadata = {
  title: "Deals — Promo Mini PC & AI Tools",
  description: "Deal terbaik Mini PC, Raspberry Pi, dan tools AI di Shopee.",
};

const deals = [
  { name: "Beelink SEi8 i5 16/500GB", price: "Rp 2.799.000", note: "Budget terbaik", url: "https://shopee.co.id/Beelink-SEi8-i.1070891797.20293439189?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "Beelink SEi10 i5 16/1TB", price: "Rp 3.299.000", note: "Best value", url: "https://shopee.co.id/Beelink-SEi10-i.15438867.22681138325?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "GEEKOM A9 Max AI Mini PC", price: "Rp 28.799.000", note: "Flagship", url: "https://shopee.co.id/GEEKOM-A9-Max-i.1412305006.55103108854?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "Raspberry Pi 5 8GB Paket", price: "Rp 4.200.000", note: "Paket siap pakai", url: "https://shopee.co.id/Raspberry-Pi-5-8GB-i.995354751.27455041254?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
  { name: "Raspberry Pi 5 AI HAT+", price: "Rp 2.971.000", note: "AI acceleration", url: "https://shopee.co.id/Raspberry-Pi-5-AI-HAT-i.27499686.28674224294?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates" },
];

export default function DealsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">🔥 Deals</h1>
      <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
        Deal terbaik untuk hardware AI agent.
      </p>

      <div className="space-y-4">
        {deals.map((deal) => (
          <div
            key={deal.name}
            className="rounded-xl p-5 flex items-center justify-between gap-4"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div>
              <h4 className="font-semibold">{deal.name}</h4>
              <div className="flex items-center gap-3 mt-1">
                <span className="font-bold" style={{ color: "var(--green)" }}>{deal.price}</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--bg-hover)", color: "var(--text-secondary)" }}>
                  {deal.note}
                </span>
              </div>
            </div>
            <a
              href={deal.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition"
              style={{ background: "var(--accent)", color: "white" }}
            >
              Beli di Shopee →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
