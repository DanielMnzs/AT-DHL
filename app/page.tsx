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
import styles from './page.module.css';

export default function HomePage() {
  // TODO: implemente a busca dos produtos e a renderização da lista

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Catálogo de Produtos</h1>

      {/* TODO: adicione loading state aqui */}

      {/* TODO: adicione tratamento de erro aqui */}

      {/* TODO: renderize a lista de produtos aqui usando <ProductCard /> */}
    </div>
  );
}
