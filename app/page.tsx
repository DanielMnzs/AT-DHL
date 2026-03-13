// ─────────────────────────────────────────────────────────────────────────────
// app/page.tsx — Página de Listagem de Produtos
//
// TAREFA:
//   1. Buscar os produtos na API: GET /api/products
//   2. Exibir um loading state enquanto aguarda a resposta
//   3. Tratar erros caso a API falhe (exibir mensagem amigável)
//   4. Renderizar a lista de produtos usando o componente <ProductCard />
//
// DICA: Use useState + useEffect para buscar os dados no cliente,
//       ou explore o fetch direto em um Server Component.
//
// ESTILOS: use styles.* importado de ./page.module.css
// ─────────────────────────────────────────────────────────────────────────────
'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import ProductCard from '../components/ProductCard/ProductCard';

export default function HomePage() {
  // TODO: implemente a busca dos produtos e a renderização da lista
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts(){
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Falha ao buscar os produtos.');
        
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError('Poxa, não conseguimos carregar o catálogo no momento. Entre em contato com o suporte para mais informações.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Catálogo de Produtos</h1>

      {/* TODO: adicione loading state aqui */}
      {isLoading && <p className={styles.loading}>Carregando produtos...</p>}

      {/* TODO: adicione tratamento de erro aqui */}
      {error && <p className={styles.error}>{error}</p>}
      
      {/* TODO: renderize a lista de produtos aqui usando <ProductCard /> */}
      {!isLoading && !error && (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
