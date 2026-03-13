// ─────────────────────────────────────────────────────────────────────────────
// app/products/[id]/page.tsx — Página de Detalhe do Produto
//
// TAREFA:
//   1. Ler o parâmetro `id` da URL via props.params.id
//   2. Buscar o produto na API: GET /api/products/:id
//   3. Exibir um loading state enquanto aguarda a resposta
//   4. Tratar o caso em que o produto não é encontrado (id inválido)
//   5. Renderizar o detalhe usando o componente <ProductDetail />
//   6. Adicionar um link para voltar à listagem
//
// DICA: params.id é uma string — converta para número se necessário.
//
// ESTILOS: use styles.* importado de ./page.module.css
// ─────────────────────────────────────────────────────────────────────────────
'use client';
import { useState, useEffect } from 'react'; 
import styles from './page.module.css';
import ProductDetail from '../../../components/ProductDetail/ProductDetail';

export default function ProductPage({ params }: { params: { id: string } }) {
  // TODO: use params.id para buscar o produto correto
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${params.id}`);
        
        if (res.status === 404) {
          throw new Error('Produto não encontrado em nosso catálogo.');
        }
        if (!res.ok) {
          throw new Error('Erro ao carregar as informações do produto.');
        }
        
        const data = await res.json();
        setProduct(data.product);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [params.id]);

  return (
    <div className={styles.container}>
      <a href="/" className={styles.backLink}>← Voltar ao catálogo</a>

      {/* TODO: adicione loading state aqui */}
      {isLoading && <p className={styles.loading}>Buscando detalhes...</p>}

      {/* TODO: adicione tratamento de erro / produto não encontrado aqui */} 
      {error && <p className={styles.error}>{error}</p>}

      {/* TODO: renderize o detalhe do produto aqui usando <ProductDetail /> */}
      {!isLoading && !error && product && (
        <ProductDetail product={product} />
      )}
    </div>
  );
}
