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
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(product.price);


  return (
    <div className={styles.container}>
      {/* TODO */}
      <img src={product.image_url} alt={product.name} className={styles.image} />
      
      <div className={styles.info}>
        <h1 className={styles.name}>{product.name}</h1>
        <p>{product.brand} | {product.category}</p>
        <h2 className={styles.price}>{formattedPrice}</h2>
        <p className={styles.description}>{product.description}</p>
        
        <div className={styles.specs}>
          <h3>Especificações Técnicas:</h3>
          <ul>
            {/* 💡 Só renderiza se tiver specs */}
            {product.specs && Object.entries(product.specs).map(([key, value]) => (
              <li key={key} className={styles.specRow}>
                <strong>{key.toUpperCase()}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
