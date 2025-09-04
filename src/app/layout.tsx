export const metadata = {
  title: 'Next 15 - Todos',
  description: 'Exercício com testes unitários'
};

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <main style={{ maxWidth: 720, margin: '0 auto', padding: 16 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
