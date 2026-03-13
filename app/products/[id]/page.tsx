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

import styles from './page.module.css';

export default function ProductPage({ params }: { params: { id: string } }) {
  // TODO: use params.id para buscar o produto correto

  return (
    <div className={styles.container}>
      <a href="/" className={styles.backLink}>← Voltar ao catálogo</a>

      {/* TODO: adicione loading state aqui */}

      {/* TODO: adicione tratamento de erro / produto não encontrado aqui */}

      {/* TODO: renderize o detalhe do produto aqui usando <ProductDetail /> */}
    </div>
  );
}
