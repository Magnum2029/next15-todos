'use client';

import { useState, useCallback } from 'react';
import type { Tarefa } from '@/data/tarefas';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';
import ListaTarefas from './ListaTarefas';
import NovaTarefa from './NovaTarefa';

type Props = { tarefasIniciais: Tarefa[] };

function gerarId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function AppTarefas({ tarefasIniciais }: Props) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
  const total = useContadorDeTarefas(tarefas);

  const handleAdicionar = useCallback((titulo: string) => {
    setTarefas(prev => [...prev, { id: gerarId(), titulo, concluida: false }]);
  }, []);

  return (
    <section aria-label="aplicacao-tarefas">
      <header className="header">
        <h1>Minhas Tarefas</h1>
        <p className="sub">
          Organize seu dia. <span className="badge" data-testid="contador">Total: {total}</span>
        </p>
      </header>

      <div className="card" aria-labelledby="sec-adicionar">
        <h2 id="sec-adicionar">Adicionar</h2>
        <NovaTarefa onAdicionar={handleAdicionar} />
        <p className="helper">Dica: mínimo 3 caracteres. Você pode pressionar <kbd>Enter</kbd> para enviar.</p>
      </div>

      <div className="card" aria-labelledby="sec-lista">
        <h2 id="sec-lista">Lista</h2>
        <ListaTarefas tarefas={tarefas} />
      </div>

      <p className="footer">Next.js 15 • Testes com Jest + Testing Library</p>
    </section>
  );
}
