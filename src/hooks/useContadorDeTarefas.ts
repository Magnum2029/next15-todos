import { useMemo } from "react";

export function useContadorDeTarefas(tarefas: string[]) {
  return useMemo(() => tarefas.length, [tarefas]);
}
