export type Tarefa = {
  id: string;
  titulo: string;
  concluida: boolean;
};

const tarefasSeed: Tarefa[] = [
  { id: 't1', titulo: 'Estudar Next.js', concluida: false },
  { id: 't2', titulo: 'Revisar TypeScript', concluida: false },
  { id: 't3', titulo: 'Escrever testes', concluida: true }
];

export async function obterTarefas(): Promise<Tarefa[]> {
  // Simula uma “API” local
  return Promise.resolve(tarefasSeed);
}
