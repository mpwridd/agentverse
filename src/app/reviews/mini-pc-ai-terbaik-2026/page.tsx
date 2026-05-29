import type { Metadata } from "next";
import Link from "next/link";

const title = "10 Mini PC Terbaik untuk Proxmox & AI Agent Server 2026";
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
    price: "Rp 1.500.000",
    note: "Budget entry",
    url: "https://s.shopee.co.id/2BC5Je6aDR?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Dell OptiPlex 3050 i5-6500T 8GB/256GB",
    price: "Rp 1.800.000",
    note: "Dell murah",
    url: "https://s.shopee.co.id/1gFok4DBKV?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "GMKtec G3 Plus Intel N150 16GB/512GB",
    price: "Rp 2.500.000",
    note: "Hemat listrik",
    url: "https://s.shopee.co.id/6L1eHtSMBK?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Beelink SEi8 i5-8279U 16/500GB",
    price: "Rp 2.799.000",
    note: "Budget terbaik",
    url: "https://s.shopee.co.id/4Va06EWqTK?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "NUC Core i5 16GB/512GB",
    price: "Rp 3.000.000",
    note: "Kompak",
    url: "https://s.shopee.co.id/LkR9aEfKX?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "GMKtec NucBox G10 AMD Ryzen5 3500U",
    price: "Rp 2.800.000",
    note: "AMD murah",
    url: "https://s.shopee.co.id/1LcyKjX6r4?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "GEEKOM A5 AMD R7 5825U 32GB/1TB",
    price: "Rp 5.500.000",
    note: "Value flagship",
    url: "https://s.shopee.co.id/2LVVWPkofH?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "GEEKOM A6 AMD Ryzen 7 6800H 16GB DDR5/1TB",
    price: "Rp 6.500.000",
    note: "DDR5",
    url: "https://s.shopee.co.id/7pqS4YkAuO?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Mac Mini M4 24GB/512GB",
    price: "Rp 12.000.000",
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
    price: "Rp 25.000",
    note: "Wajib",
    url: "https://s.shopee.co.id/20sf7WWbrv?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
  },
  {
    name: "Keyboard ROBOT RK10",
    price: "Rp 85.000",
    note: "Setup awal",
    url: "https://s.shopee.co.id/1VwOXoz07t?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates",
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
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>
        <Link href="/" className="hover:underline">
          Beranda
        </Link>
        <span className="mx-2">/</span>
        <Link href="/reviews" className="hover:underline">
          Reviews
        </Link>
        <span className="mx-2">/</span>
        <span>Mini PC Terbaik 2026</span>
      </nav>

      {/* Header */}
      <h1
        className="text-3xl md:text-4xl font-bold leading-tight mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h1>

      <p
        className="text-lg mb-8 leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>

      {/* Intro */}
      <section className="mb-10">
        <p className="leading-relaxed mb-4" style={{ color: "var(--text-primary)" }}>
          Mini PC + Proxmox adalah kombinasi terbaik untuk membangun home server yang
          hemat listrik namun powerful. Dengan Proxmox VE, kamu bisa menjalankan
          beberapa VM, LXC container, dan AI Agent sekaligus dalam satu perangkat
          kecil yang nyaris tanpa suara. Tidak perlu rack server besar — cukup satu
          Mini PC di meja atau di pojok ruangan, dan kamu sudah punya lab virtualisasi
          sendiri di rumah.
        </p>
      </section>

      {/* Kenapa Mini PC + Proxmox */}
      <section className="mb-10">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Kenapa Mini PC + Proxmox?
        </h2>
        <ul className="space-y-3">
          {[
            "Hemat listrik — konsumsi daya 10-65W, jauh lebih rendah dari server rak biasa",
            "Ukuran kecil dan tanpa kipas (fanless) atau nyaris sunyi, cocok untuk ruang kerja di rumah",
            "Cukup powerful untuk menjalankan beberapa VM, Docker container, dan AI agent sekaligus",
            "Biaya sangat terjangkau — mulai dari Rp 1,5 jutaan sudah bisa virtualisasi",
            "Proxmox VE gratis (open source) dengan fitur enterprise-grade: snapshot, clustering, backup terjadwal",
            "Skalabilitas mudah — tinggal tambah unit Mini PC dan join ke Proxmox cluster",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span style={{ color: "var(--text-primary)" }}>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Spesifikasi Minimum */}
      <section className="mb-10">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Spesifikasi Minimum untuk Proxmox
        </h2>
        <div
          className="rounded-xl p-5 border"
          style={{
            backgroundColor: "var(--surface, #f9fafb)",
            borderColor: "var(--border)",
          }}
        >
          <ul className="space-y-2">
            {[
              "RAM: 16GB minimum (32GB direkomendasikan untuk menjalankan banyak VM)",
              "Storage: SSD NVMe 256GB+ (HDD terlalu lambat untuk virtualisasi)",
              "CPU: Intel Gen 8 ke atas atau AMD Ryzen (pastikan support VT-x/VT-d atau AMD-V/IOMMU)",
              "LAN: 2x port LAN sangat ideal — satu untuk management, satu untuk VM/bridge",
              "Bonus: Intel N100/N150/Ryzen 7 untuk performa lebih baik dengan TDP rendah",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold"
                >
                  {i + 1}
                </span>
                <span style={{ color: "var(--text-primary)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Rekomendasi Mini PC */}
      <section className="mb-10">
        <h2
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Rekomendasi Mini PC Terbaik 2026
        </h2>
        <p className="mb-5 text-sm" style={{ color: "var(--text-secondary)" }}>
          Harga dapat berubah sewaktu-waktu. Link di bawah adalah link afiliasi Shopee.
        </p>
        <div className="space-y-3">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-xl p-5 border hover:shadow-md transition"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center justify-between gap-4">
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
                  rel="noopener noreferrer nofollow"
                  className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Beli →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aksesoris Pendukung */}
      <section className="mb-10">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Aksesoris Pendukung
        </h2>
        <p className="mb-4 text-sm" style={{ color: "var(--text-secondary)" }}>
          Beberapa aksesoris yang perlu kamu siapkan saat membangun home server.
        </p>
        <div className="space-y-3">
          {accessories.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-xl p-5 border hover:shadow-md transition"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center justify-between gap-4">
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
                  rel="noopener noreferrer nofollow"
                  className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Beli →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verdict */}
      <section className="mb-10">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Verdict: Pilih Mana?
        </h2>
        <div
          className="rounded-xl p-5 border space-y-3"
          style={{
            backgroundColor: "var(--surface, #f0fdf4)",
            borderColor: "var(--border)",
          }}
        >
          <p style={{ color: "var(--text-primary)" }}>
            <strong>Budget ketat (di bawah Rp 2 juta):</strong> Lenovo ThinkCentre M910q
            atau Dell OptiPlex 3050 — keduanya sudah cukup untuk Proxmox dasar dengan 1-2
            VM ringan.
          </p>
          <p style={{ color: "var(--text-primary)" }}>
            <strong>Best value (Rp 2-3 juta):</strong> Beelink SEi8 atau GMKtec G3 Plus.
            SEi8 punya performa lebih baik, G3 Plus lebih hemat listrik dengan N150.
          </p>
          <p style={{ color: "var(--text-primary)" }}>
            <strong>Serius virtualisasi (Rp 5-7 juta):</strong> GEEKOM A5 atau A6. RAM 32GB
            dan storage besar, bisa jalankan banyak VM + AI agent sekaligus.
          </p>
          <p style={{ color: "var(--text-primary)" }}>
            <strong>Apple ecosystem (Rp 12 juta):</strong> Mac Mini M4 sangat powerful dan
            efisien, cocok kalau kamu sudah di ekosistem Apple.
          </p>
          <p style={{ color: "var(--text-primary)" }}>
            <strong>No compromise (Rp 28 juta+):</strong> GEEKOM A9 Max — Ryzen 9 HX 470
            dengan DDR5, ini workstation mini yang bisa gantikan server rak.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <p
        className="text-xs mb-10 leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        Disclaimer: Artikel ini mengandung link afiliasi Shopee. Kami mendapat komisi
        kecil jika kamu membeli melalui link tersebut, tanpa biaya tambahan untukmu.
        Harga dapat berubah sewaktu-waktu sesuai kebijakan penjual.
      </p>

      {/* Related Articles */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Artikel Terkait
        </h2>
        <div className="space-y-3">
          {relatedArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/reviews/${article.slug}`}
              className="block rounded-xl p-4 border hover:shadow-md transition"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="font-medium" style={{ color: "var(--text-primary)" }}>
                {article.title}
              </span>
              <span className="ml-2 text-blue-600">→</span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
