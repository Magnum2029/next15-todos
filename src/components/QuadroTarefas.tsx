"use client";

import { useState } from "react";
import NovaTarefa from "./NovaTarefa";
import ListaTarefas from "./ListaTarefas";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import type { Tarefa } from "@/data/tarefas";

type Props = {
  initial: Tarefa[];
};

export default function QuadroTarefas({ initial }: Props) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(initial);
  const total = useContadorDeTarefas(tarefas);

  const onAdd = (nome: string) => {
    setTarefas((prev) => [
      ...prev,
      { id: Date.now(), nome, concluida: false },
    ]);
  };

  return (
    <div className="w-full max-w-3xl space-y-6 p-6 bg-gray-900/70 rounded-2xl shadow-xl border border-gray-700">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Minhas Tarefas</h1>
          <p className="text-gray-300">Organize seu dia.</p>
        </div>
        <span
          className="px-3 py-1 rounded-full text-sm bg-blue-600/90"
          role="status"
          aria-live="polite"
        >
          Total: {total}
        </span>
      </header>

      <NovaTarefa onAdd={onAdd} />

      <ListaTarefas itens={tarefas} />

      <footer className="text-center text-sm text-gray-400">
        Next.js 15 • Testes com Jest + Testing Library
      </footer>
    </div>
  );
}
