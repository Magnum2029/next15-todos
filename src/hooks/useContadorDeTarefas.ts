import { useMemo } from 'react';
import type { Tarefa } from '@/data/tarefas';

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  // Mantém simples e determinístico para testes
  return useMemo(() => tarefas.length, [tarefas]);
}
