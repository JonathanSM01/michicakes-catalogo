import ProductCard from './ProductCard.jsx';
import { useReveal } from '../hooks/useMotion.js';

export default function ProductGrid({ products, onOpen }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {products.map((p, i) => (
        <ProductCard key={p.id} product={p} onOpen={onOpen} index={i} />
      ))}
    </div>
  );
}
