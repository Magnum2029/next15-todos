import type { Tarefa } from "@/data/tarefas";

export function useContadorDeTarefas(lista: Tarefa[]) {
  return lista.length;
}


