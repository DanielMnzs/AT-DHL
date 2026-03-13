// ─────────────────────────────────────────────────────────────────────────────
// components/ProductCard.tsx — Card de produto para a listagem
//
// TAREFA:
//   Receber um objeto `product` via props e exibir as informações principais:
//     - Imagem (image_url)
//     - Nome (name) e Marca (brand)
//     - Categoria (category)
//     - Preço (price) — formate como moeda brasileira (R$)
//     - Disponibilidade (available / stock)
//     - Link para a página de detalhe: /products/:id
//
// TODO (opcional): indicador visual de "Indisponível" para available: false
//
// ESTILOS: use styles.* importado de ./ProductCard.module.css
// ─────────────────────────────────────────────────────────────────────────────

import styles from './ProductCard.module.css';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  image_url: string;
  available: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // TODO: implemente o card do produto

  return (
    <div className={styles.card}>
      {/* TODO */}
    </div>
  );
}
