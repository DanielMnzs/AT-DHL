import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TechMart Catalog',
  description: 'Catálogo de produtos TechMart — Avaliação Técnica',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* ── HEADER ─────────────────────────────────────────────────────
            TODO (opcional): Você pode personalizar o header como quiser.
            Por enquanto ele exibe apenas o nome da aplicação.
        ──────────────────────────────────────────────────────────────── */}
        <header className="site-header">
          <div className="header-inner">
            <span className="header-logo">TechMart</span>
            <nav>
              <a href="/">Catálogo</a>
            </nav>
          </div>
        </header>

        {/* ── MAIN CONTENT ──────────────────────────────────────────────── */}
        <main className="main-content">
          {children}
        </main>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <footer className="site-footer">
          <p>TechMart © 2024 — Avaliação Técnica</p>
        </footer>
      </body>
    </html>
  );
}
