import { Tarefa } from "@/data/tarefas";

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  return tarefas.length;
}

