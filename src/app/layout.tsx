import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next 15 - Todos",
  description: "Lista de tarefas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

