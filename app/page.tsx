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
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Catálogo de Produtos</h1>

      {!isLoading && !error && (
        <input 
          type="text" 
          placeholder="Buscar por nome ou categoria..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput} // Vamos ter que adicionar isso no CSS
        />
      )}

      {/* TODO: adicione loading state aqui */}
      {isLoading && <p className={styles.loading}>Carregando produtos...</p>}

      {/* TODO: renderize a lista de produtos aqui usando <ProductCard /> */}
      {!isLoading && !error && (
        <div className={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className={styles.empty}>Nenhum produto encontrado para "{searchTerm}"</p>
          )}
        </div>
      )}

      {/* TODO: adicione tratamento de erro aqui */}
      {error && <p className={styles.error}>{error}</p>}
      
      
      
    </div>
  );
}
