import type { Tarefa } from '@/data/tarefas';

type Props = { tarefas: Tarefa[] };

export default function ListaTarefas({ tarefas }: Props) {
  if (tarefas.length === 0) return <p>Nenhuma tarefa ainda.</p>;
  return (
    <ul aria-label="lista-de-tarefas">
      {tarefas.map(t => (
        <li key={t.id} className="item">
          <span aria-label={t.concluida ? 'tarefa concluida' : 'tarefa pendente'}>
            {t.concluida ? '✅' : '📝'}
          </span>
          <span>{t.titulo}</span>
        </li>
      ))}
    </ul>
  );
}
