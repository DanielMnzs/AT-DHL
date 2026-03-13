# TechMart Catalog — Avaliação Técnica

> Aplicação de catálogo de produtos desenvolvida como parte do processo seletivo para Analista de Sistemas.

🔗 **Deploy:** _adicione aqui o link da Vercel após o deploy_  
📁 **Repositório:** _adicione aqui o link do GitHub_

---

## Sobre o Projeto

Breve descrição do que você construiu e as decisões técnicas que tomou.

_Exemplo: "Optei por usar Client Components com useState + useEffect para o fetch de dados porque..."_

---

## Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/) — App Router
- React 18 + TypeScript
- CSS Modules (co-locados com cada componente/página)
- _Adicione aqui outras libs que usou_

---

## Pré-requisitos

- Node.js 18.17 ou superior
- npm 9+

---

## Rodando Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/techmart-catalog.git
cd techmart-catalog

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Endpoints disponíveis localmente

| Método | URL                   | Descrição                      |
|--------|-----------------------|--------------------------------|
| GET    | `/api/products`       | Lista todos os produtos        |
| GET    | `/api/products/:id`   | Retorna um produto pelo ID     |

---

## Deploy na Vercel

```bash
# Teste o build antes de fazer deploy
npm run build
npm run start
```

Para fazer o deploy:
1. Suba o código no GitHub
2. Importe o repositório em [vercel.com](https://vercel.com)
3. Clique em **Deploy** — a Vercel detecta Next.js automaticamente

---

## Estrutura do Projeto

```
techmart-catalog/
├── app/
│   ├── layout.tsx                    # Layout raiz (header + footer)
│   ├── page.tsx                      # Listagem de produtos
│   ├── page.module.css               # Estilos da listagem
│   ├── globals.css                   # Estilos globais (reset, header, footer)
│   ├── products/
│   │   └── [id]/
│   │       ├── page.tsx              # Detalhe do produto
│   │       └── page.module.css       # Estilos do detalhe
│   └── api/
│       └── products/
│           ├── route.js              # GET /api/products
│           └── [id]/
│               └── route.js          # GET /api/products/:id
├── components/
│   ├── ProductCard.tsx               # Card para a listagem
│   ├── ProductCard.module.css        # Estilos do card
│   ├── ProductDetail.tsx             # Detalhe completo do produto
│   └── ProductDetail.module.css      # Estilos do detalhe
├── data/
│   └── products.json                 # Dados mock fornecidos
├── tsconfig.json
└── README.md
```

---

## Decisões Técnicas

_Explique aqui as principais escolhas que você fez:_

- **Estratégia de fetch:** Client-side (useEffect) ou Server Component?
- **Gerenciamento de estado:** useState, useReducer, ou outra abordagem?
- **Algo que faria diferente** com mais tempo?
