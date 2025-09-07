"use client";

import { useState } from "react";

export default function NovaTarefa() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState<string[]>([]);

  const adicionarTarefa = () => {
    if (!tarefa.trim()) return;
    setTarefas([...tarefas, tarefa]);
    setTarefa("");
  };

  return (
    <div>
      <h3>Adicionar nova tarefa</h3>
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        data-testid="input-tarefa"
      />
      <button onClick={adicionarTarefa} data-testid="btn-adicionar">
        Adicionar
      </button>

      <ul>
        {tarefas.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
