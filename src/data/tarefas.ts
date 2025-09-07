export type Tarefa = {
  id: number;
  nome: string;
  concluida: boolean;
};

export const tarefas: Tarefa[] = [
  { id: 1, nome: "Estudar Next.js", concluida: false },
  { id: 2, nome: "Revisar TypeScript", concluida: false },
  { id: 3, nome: "Escrever testes", concluida: true },
];

