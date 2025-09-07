"use client";

import { useState, useRef, useEffect } from "react";

type Props = {
  onAdd: (nome: string) => void;
  minChars?: number;
};

export default function NovaTarefa({ onAdd, minChars = 3 }: Props) {
  const [texto, setTexto] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const enviar = () => {
    const nome = texto.trim();
    if (nome.length < minChars) {
      setErro(`Digite ao menos ${minChars} caracteres.`);
      return;
    }
    onAdd(nome);
    setTexto("");
    setErro(null);
    inputRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") enviar();
  };

  return (
    <section className="bg-gray-800/80 border border-gray-700 rounded-xl p-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-3">Adicionar</h2>

      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Descreva a tarefa..."
          aria-invalid={!!erro}
          aria-describedby={erro ? "erro-tarefa" : undefined}
          className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-300"
        />
        <button
          onClick={enviar}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:translate-y-px transition"
        >
          Adicionar
        </button>
      </div>

      <p className="text-sm text-gray-400 mt-2">
        Ex: “Estudar Next.js” • Dica: mínimo {minChars} caracteres. Você pode
        pressionar Enter para enviar.
      </p>

      {erro && (
        <div
          id="erro-tarefa"
          role="alert"
          className="mt-2 text-sm text-red-300"
        >
          {erro}
        </div>
      )}
    </section>
  );
}
