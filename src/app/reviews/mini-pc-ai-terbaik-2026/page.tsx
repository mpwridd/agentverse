import type { Metadata } from "next";
import Link from "next/link";

const title = "12 Mini PC Terbaik untuk Proxmox & AI Agent Server 2026";
const description =
  "Rekomendasi Mini PC terbaik untuk dijadikan server Proxmox. Jalankan AI Agent, VM, container, dan self-hosted services 24/7 di rumah.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "article",
  },
};

const products = [
  {
    name: "Lenovo ThinkCentre M910q/M710q i5 Gen 7 8GB/256GB",
    price: "Rp 869.000",
    note: "Budget entry",
    url: "https://s.shopee.co.id/2BC5Je6aDR?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Lenovo ThinkCentre M720Q i3 Gen 8 8GB/256GB",
    price: "Rp 1.785.000",
    note: "Lenovo populer",
    url: "https://s.shopee.co.id/LkRFjJlpD?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Dell OptiPlex 3050 i5-6500T 8GB/256GB",
    price: "Rp 650.000",
    note: "Dell murah",
    url: "https://s.shopee.co.id/1gFok4DBKV?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "GMKtec G3 Plus Intel N150 16GB/512GB",
    price: "Rp 5.519.000",
    note: "Hemat listrik",
    url: "https://s.shopee.co.id/6L1eHtSMBK?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Beelink SEi8 i5-8279U 16/500GB",
    price: "Rp 5.199.000",
    note: "Budget terbaik",
    url: "https://s.shopee.co.id/4Va06EWqTK?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "NUC Core i5 16GB/512GB (Like New)",
    price: "Rp 1.320.000",
    note: "Kompak",
    url: "https://s.shopee.co.id/LkR9aEfKX?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "GMKtec NucBox G10 AMD Ryzen5 3500U",
    price: "Rp 3.599.000",
    note: "AMD murah",
    url: "https://s.shopee.co.id/1LcyKjX6r4?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
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
    name: "GEEKOM A9 Max 2026 AMD Ryzen9 HX 470 32GB DDR5/1TB",
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

const relatedArticles = [
  {
    title: "Cara Install Proxmox + Setup AI Agent",
    slug: "setup-ai-agent-di-rumah",
  },
  {
    title: "Mini PC vs VPS Cloud",
    slug: "raspberry-pi-5-vs-mini-pc",
  },
];

export default function MiniPcAiTerbaikPage() {
  return (
    <article className="max-w-none">
      <Link
        href="/reviews"
        className="text-sm mb-6 inline-block text-blue-600 hover:text-blue-700"
      >
        ← Kembali ke Reviews
      </Link>

      <div className="flex items-center gap-3 text-xs mb-6">
        <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 font-medium">
          Review
        </span>
        <span style={{ color: "var(--text-secondary)" }}>
          Mei 2026 · 10 menit baca
        </span>
      </div>

      <h1
        className="text-3xl font-bold mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        12 Mini PC Terbaik untuk Proxmox & AI Agent Server 2026
      </h1>

      <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
        Rekomendasi Mini PC terbaik untuk dijadikan server Proxmox di rumah.
        Jalankan AI Agent 24/7, hemat listrik, dan lebih fleksibel daripada VPS
        cloud. Harga dari{" "}
        <a
          href="https://shopee.co.id"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700"
        >
          Shopee Indonesia
        </a>
        .
      </p>

      <div
        className="bg-yellow-50 rounded-lg p-4 mb-6 border border-yellow-200"
        style={{ color: "var(--text-secondary)" }}
      >
        <p className="text-sm">
          <strong className="text-yellow-800">💡 Tips:</strong> Harga dapat
          berubah sewaktu-waktu. Klik link untuk cek harga terbaru.
        </p>
      </div>

      {/* Mini PC List */}
      <h2
        className="text-2xl font-bold mt-8 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Rekomendasi Mini PC
      </h2>

      <div className="space-y-4">
        {products.map((p, i) => (
          <div
            key={p.name}
            className="bg-white rounded-xl p-5 flex items-center justify-between gap-4 border hover:shadow-md transition"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor:
                      i < 3
                        ? "#dcfce7"
                        : i < 6
                          ? "#dbeafe"
                          : i < 9
                            ? "#fef3c7"
                            : "#fce7f3",
                    color:
                      i < 3
                        ? "#166534"
                        : i < 6
                          ? "#1e40af"
                          : i < 9
                            ? "#92400e"
                            : "#9d174d",
                  }}
                >
                  #{i + 1}
                </span>
                <h3
                  className="font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {p.name}
                </h3>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="font-bold text-green-600">{p.price}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full bg-gray-100"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {p.note}
                </span>
              </div>
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-sm font-medium"
            >
              Beli →
            </a>
          </div>
        ))}
      </div>

      {/* Accessories */}
      <h2
        className="text-2xl font-bold mt-10 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Aksesoris Wajib
      </h2>

      <div className="space-y-4">
        {accessories.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-xl p-5 flex items-center justify-between gap-4 border hover:shadow-md transition"
            style={{ borderColor: "var(--border)" }}
          >
            <div>
              <h4
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {p.name}
              </h4>
              <div className="flex items-center gap-3 mt-1">
                <span className="font-bold text-green-600">{p.price}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full bg-gray-100"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {p.note}
                </span>
              </div>
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-sm font-medium"
            >
              Beli →
            </a>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <h2
        className="text-2xl font-bold mt-10 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Perbandingan Singkat
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th
                className="text-left p-3 border font-semibold"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                Mini PC
              </th>
              <th
                className="text-left p-3 border font-semibold"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                Harga
              </th>
              <th
                className="text-left p-3 border font-semibold"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                Kategori
              </th>
            </tr>
          </thead>
          <tbody style={{ color: "var(--text-secondary)" }}>
            {products.map((p, i) => (
              <tr key={p.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-3 border" style={{ borderColor: "var(--border)" }}>
                  {p.name}
                </td>
                <td
                  className="p-3 border font-bold text-green-600"
                  style={{ borderColor: "var(--border)" }}
                >
                  {p.price}
                </td>
                <td className="p-3 border" style={{ borderColor: "var(--border)" }}>
                  {p.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Related Articles */}
      <h2
        className="text-2xl font-bold mt-10 mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Artikel Terkait
      </h2>
      <div className="space-y-3">
        {relatedArticles.map((a) => (
          <Link
            key={a.slug}
            href={`/reviews/${a.slug}`}
            className="block bg-white rounded-xl p-4 border hover:shadow-md transition"
            style={{ borderColor: "var(--border)" }}
          >
            <h4
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              {a.title}
            </h4>
          </Link>
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
          <strong>Disclaimer:</strong> Harga terakhir diperbarui Mei 2026 dari
          Shopee Indonesia. Harga dapat berubah sewaktu-waktu. Link di halaman
          ini adalah link affiliate — kamu tidak dikenakan biaya tambahan, tapi
          kami mendapat komisi kecil dari setiap pembelian. Terima kasih atas
          dukungannya!
        </p>
      </div>
    </article>
  );
}
