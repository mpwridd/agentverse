export const metadata = {
  title: "Deals — Promo Mini PC & AI Tools",
  description: "Deal terbaik Mini PC, Raspberry Pi, dan tools AI di Shopee.",
};

const deals = [
  {
    name: "Dell OptiPlex 3050 i5-6500T 8GB/256GB",
    price: "Rp 650.000",
    oldPrice: "Rp 1.800.000",
    note: "🔥 Best Deal",
    url: "https://s.shopee.co.id/1gFok4DBKV?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Lenovo M910q i5 Gen 7 8GB/256GB",
    price: "Rp 869.000",
    oldPrice: "Rp 1.500.000",
    note: "Budget King",
    url: "https://s.shopee.co.id/2BC5Je6aDR?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "NUC Core i5 16GB/512GB (Like New)",
    price: "Rp 1.320.000",
    oldPrice: "Rp 3.000.000",
    note: "🔥 Steal",
    url: "https://s.shopee.co.id/LkR9aEfKX?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Lenovo M720Q i3 Gen 8 8GB/256GB",
    price: "Rp 1.785.000",
    note: "Lenovo populer",
    url: "https://s.shopee.co.id/LkRFjJlpD?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "GMKtec NucBox G10 AMD Ryzen5 3500U",
    price: "Rp 3.599.000",
    note: "AMD murah",
    url: "https://s.shopee.co.id/1LcyKjX6r4?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Beelink SEi8 i5-8279U 16/500GB",
    price: "Rp 5.199.000",
    note: "Budget terbaik",
    url: "https://s.shopee.co.id/4Va06EWqTK?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "GMKtec G3 Plus Intel N150 16GB/512GB",
    price: "Rp 5.519.000",
    note: "Hemat listrik",
    url: "https://s.shopee.co.id/6L1eHtSMBK?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "GEEKOM A5 AMD R7 5825U 32GB/1TB",
    price: "Rp 8.178.000",
    note: "Value flagship",
    url: "https://s.shopee.co.id/2LVVWPkofH?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "GEEKOM A6 AMD Ryzen 7 6800H 16GB DDR5/1TB",
    price: "Rp 9.098.000",
    note: "DDR5",
    url: "https://s.shopee.co.id/7pqS4YkAuO?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Mac Mini M4 24GB/512GB",
    price: "Rp 17.610.000",
    note: "Apple ecosystem",
    url: "https://s.shopee.co.id/1BJY9Fv8iu?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "GEEKOM A9 Max 2026 Ryzen9 HX 470 32GB/1TB",
    price: "Rp 28.799.000",
    note: "Flagship",
    url: "https://s.shopee.co.id/809sGuV3pV?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
];

const accessories = [
  {
    name: "LAN Cable Cat6",
    price: "Rp 14.900",
    note: "Wajib",
    url: "https://s.shopee.co.id/20sf7WWbrv?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Keyboard ROBOT RK10",
    price: "Rp 98.000",
    note: "Setup awal",
    url: "https://s.shopee.co.id/1VwOXoz07t?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Mouse + Keyboard Wireless Combo",
    price: "Rp 150.000",
    note: "Praktis",
    url: "https://s.shopee.co.id/9zuwlk2YL0?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
];

export default function DealsPage() {
  return (
    <div>
      <h1
        className="text-3xl font-bold mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        🔥 Deals
      </h1>
      <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
        Harga real-time dari Shopee Indonesia. Terakhir update: Mei 2026.
      </p>

      {/* Mini PC Deals */}
      <h2
        className="text-xl font-bold mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Mini PC
      </h2>
      <div className="space-y-4 mb-8">
        {deals.map((deal) => (
          <div
            key={deal.name}
            className="bg-white rounded-xl p-5 flex items-center justify-between gap-4 border hover:shadow-md transition"
            style={{ borderColor: "var(--border)" }}
          >
            <div>
              <h4
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {deal.name}
              </h4>
              <div className="flex items-center gap-3 mt-1">
                <span className="font-bold text-green-600">{deal.price}</span>
                {deal.oldPrice && (
                  <span className="text-xs line-through text-gray-400">
                    {deal.oldPrice}
                  </span>
                )}
                <span
                  className="text-xs px-2 py-0.5 rounded-full bg-gray-100"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {deal.note}
                </span>
              </div>
            </div>
            <a
              href={deal.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition"
            >
              Beli →
            </a>
          </div>
        ))}
      </div>

      {/* Accessories */}
      <h2
        className="text-xl font-bold mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Aksesoris
      </h2>
      <div className="space-y-4">
        {accessories.map((acc) => (
          <div
            key={acc.name}
            className="bg-white rounded-xl p-5 flex items-center justify-between gap-4 border hover:shadow-md transition"
            style={{ borderColor: "var(--border)" }}
          >
            <div>
              <h4
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {acc.name}
              </h4>
              <div className="flex items-center gap-3 mt-1">
                <span className="font-bold text-green-600">{acc.price}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full bg-gray-100"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {acc.note}
                </span>
              </div>
            </div>
            <a
              href={acc.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition"
            >
              Beli →
            </a>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div
        className="mt-10 p-4 rounded-lg border text-xs"
        style={{
          borderColor: "var(--border)",
          color: "var(--text-secondary)",
        }}
      >
        <p>
          <strong>Disclaimer:</strong> Harga dari Shopee Indonesia, dapat
          berubah sewaktu-waktu. Klik link untuk harga terbaru. Link affiliate —
          kamu tidak dikenakan biaya tambahan.
        </p>
      </div>
    </div>
  );
}
