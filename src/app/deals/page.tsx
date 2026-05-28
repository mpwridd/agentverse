import ProductLink from "@/components/ProductLink";

export const metadata = {
  title: "Deals — Promo Mini PC & AI Tools",
  description:
    "Deal terbaik Mini PC, Raspberry Pi, dan tools AI di Shopee.",
};

export default function DealsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">🔥 Deals</h1>
      <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
        Deal terbaik untuk hardware AI agent.
      </p>

      <h2 className="text-xl font-semibold mb-4">Mini PC</h2>
      <ProductLink
        name="Beelink SEi8 i5 16/500GB"
        url="https://shopee.co.id/Beelink-SEi8-i.1070891797.20293439189?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates"
        price="Rp 2.799.000"
        note="Budget terbaik"
      />
      <ProductLink
        name="Beelink SEi10 i5 16/1TB"
        url="https://shopee.co.id/Beelink-SEi10-i.15438867.22681138325?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates"
        price="Rp 3.299.000"
        note="Best value"
      />
      <ProductLink
        name="GEEKOM A9 Max AI Mini PC"
        url="https://shopee.co.id/GEEKOM-A9-Max-i.1412305006.55103108854?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates"
        price="Rp 28.799.000"
        note="Flagship"
      />

      <h2 className="text-xl font-semibold mb-4 mt-8">Raspberry Pi</h2>
      <ProductLink
        name="Raspberry Pi 5 8GB Paket Lengkap"
        url="https://shopee.co.id/Raspberry-Pi-5-8GB-i.995354751.27455041254?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates"
        price="Rp 4.200.000"
        note="Paket siap pakai"
      />
      <ProductLink
        name="Raspberry Pi 5 AI HAT+ 26 TOPS"
        url="https://shopee.co.id/Raspberry-Pi-5-AI-HAT-i.27499686.28674224294?mmp_pid=an_11360871961&utm_source=an_11360871961&utm_medium=affiliates"
        price="Rp 2.971.000"
        note="AI acceleration"
      />
    </div>
  );
}
