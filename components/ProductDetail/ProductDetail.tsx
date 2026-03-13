// ─────────────────────────────────────────────────────────────────────────────
// components/ProductDetail.tsx — Detalhe completo de um produto
//
// TAREFA:
//   Receber um objeto `product` via props e exibir todas as suas informações:
//     - Imagem (image_url)
//     - Nome (name) e Marca (brand)
//     - Categoria (category)
//     - Descrição completa (description)
//     - Preço (price) — formate como moeda brasileira (R$)
//     - Estoque (stock) e Disponibilidade (available)
//     - Avaliação (rating) — ex: ★ 4.7
//     - Especificações técnicas (specs) — objeto com chave/valor variável
//
// DICA: Para renderizar as specs, use Object.entries(product.specs)
//
// ESTILOS: use styles.* importado de ./ProductDetail.module.css
// ─────────────────────────────────────────────────────────────────────────────

import styles from './ProductDetail.module.css';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  image_url: string;
  description: string;
  available: boolean;
  specs: Record<string, string>;
}

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  // TODO: implemente o detalhe do produto

  return (
    <div className={styles.container}>
      {/* TODO */}
    </div>
  );
}
