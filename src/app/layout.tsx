import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <h1>📝 Todo List - Next.js 15</h1>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">© 2025 - Desenvolvido por Magnum</footer>
      </body>
    </html>
  );
}
