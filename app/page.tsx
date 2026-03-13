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
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [onlyAvailable, setOnlyAvailable] = useState(false);

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

  const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = category === '' || product.category === category;
    const matchMin = minPrice === '' || product.price >= Number(minPrice);
    const matchMax = maxPrice === '' || product.price <= Number(maxPrice);
    const matchAvailable = onlyAvailable ? product.available === true : true;
    return matchSearch && matchCategory && matchMin && matchMax && matchAvailable;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Catálogo de Produtos</h1>

      {!isLoading && !error && (
        <div className={styles.filtersPanel}>
          <div className={styles.filterGroup}>
            <label>Buscar Produto</label>
            <input 
              type="text" 
              placeholder="Ex: Monitor..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.filterInput}
            />
          </div>

          <div className={styles.filterGroup}>
            <label>Categoria</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.filterInput}>
              <option value="">Todas</option>
              {uniqueCategories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Preço Mínimo (R$)</label>
            <input type="number" placeholder="0" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className={styles.filterInput} />
          </div>

          <div className={styles.filterGroup}>
            <label>Preço Máximo (R$)</label>
            <input type="number" placeholder="9999" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className={styles.filterInput} />
          </div>

          <label className={styles.checkboxGroup}>
            <input 
              type="checkbox" 
              checked={onlyAvailable} 
              onChange={(e) => setOnlyAvailable(e.target.checked)} 
            />
            Apenas Disponíveis
          </label>
        </div>
      )}


      {/* TODO: adicione loading state aqui */}
      {isLoading && (
        <div className={styles.grid}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className={styles.skeletonCard}></div>
          ))}
        </div>
      )}

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
