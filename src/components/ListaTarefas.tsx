"use client";

import type { Tarefa } from "@/data/tarefas";

type Props = {
  itens: Tarefa[];
};

export default function ListaTarefas({ itens }: Props) {
  return (
    <section className="bg-gray-800/80 border border-gray-700 rounded-xl p-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-3">Lista</h2>

      <ul className="space-y-2" aria-live="polite">
        {itens.map((t) => (
          <li
            key={t.id}
            className={`flex items-center justify-between px-4 py-3 rounded-lg border
              ${t.concluida
                ? "bg-green-900/40 border-green-800 text-green-200"
                : "bg-gray-900/60 border-gray-700 text-gray-100"
              }`}
          >
            <div className="flex items-center gap-2">
              <span aria-hidden>📄</span>
              <span>{t.nome}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
