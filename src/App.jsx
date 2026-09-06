import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import UniverseSelector from './components/UniverseSelector.jsx';
import BrandSection from './components/BrandSection.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import PackagingShowcase from './components/PackagingShowcase.jsx';
import HowToOrder from './components/HowToOrder.jsx';
import OrderCTA from './components/OrderCTA.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import ProductModal from './components/ProductModal.jsx';
import { BRANDS, byBrand } from './data/products.js';
import { Whisk, Cookie, Plantain } from './components/Decor.jsx';

export default function App() {
  const [active, setActive] = useState(null);
  const open = (p) => setActive(p);
  const close = () => setActive(null);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UniverseSelector />

        <BrandSection
          id="michicakes"
          brand="michicakes"
          index="03"
          eyebrow={BRANDS.michicakes.kind}
          title="Dulces que hacen"
          titleAccent="michis"
          intro={BRANDS.michicakes.blurb}
          decor={
            <Whisk aria-hidden="true" className="pointer-events-none absolute right-[5%] top-24 h-16 w-16 text-[var(--brand-accent)] opacity-20" />
          }
        >
          <ProductGrid products={byBrand('michicakes')} onOpen={open} />
        </BrandSection>

        <BrandSection
          id="cookies"
          brand="cookies"
          index="04"
          eyebrow="Galletas"
          title="Una galleta nunca"
          titleAccent="es suficiente"
          intro="Chocolate, mantequilla y horneado lento. Los sabores definitivos están en camino."
          decor={
            <Cookie aria-hidden="true" className="pointer-events-none absolute -left-6 top-28 h-24 w-24 text-[var(--brand-accent)] opacity-15" />
          }
        >
          <div className="space-y-20">
            <ProductGrid products={byBrand('cookies')} onOpen={open} />
            <PackagingShowcase />
          </div>
        </BrandSection>

        <BrandSection
          id="patacon"
          brand="patacon"
          index="05"
          eyebrow="Salado"
          title="El rey"
          titleAccent="del verde"
          intro="El sabor de nuestra tierra. Tropical, abundante y bien servido."
          decor={
            <Plantain aria-hidden="true" className="pointer-events-none absolute right-[6%] bottom-16 h-20 w-20 text-[var(--brand-accent)] opacity-25" />
          }
        >
          <ProductGrid products={byBrand('patacon')} onOpen={open} />
        </BrandSection>

        <HowToOrder />
        <OrderCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      {active && <ProductModal product={active} onClose={close} />}
    </>
  );
}
