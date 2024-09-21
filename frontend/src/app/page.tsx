import PricingCard from '../components/PricingCard';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center my-8">
        <h2 className="text-4xl font-bold">Pricing Plans</h2>
        <p className="mt-4">Berlangganan untuk menjadi dropshiper.</p>
      </div>

      <div className="flex space-x-4">
        <PricingCard id="1" title="1 Bulan" price="$5" />
        <PricingCard id="2" title="6 Bulan" price="$15" highlighted />
        <PricingCard id="3" title="1 Tahun" price="$30" />
      </div>
    </div>
  );
}
