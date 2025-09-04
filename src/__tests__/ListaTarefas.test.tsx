import { render, screen } from '@testing-library/react';
import ListaTarefas from '@/components/ListaTarefas';
import type { Tarefa } from '@/data/tarefas';

describe('<ListaTarefas />', () => {
  it('renderiza mensagem quando vazia', () => {
    render(<ListaTarefas tarefas={[]} />);
    expect(screen.getByText(/Nenhuma tarefa ainda\./i)).toBeInTheDocument();
  });

  it('renderiza itens e ícones corretos', () => {
    const tarefas: Tarefa[] = [
      { id: '1', titulo: 'A', concluida: false },
      { id: '2', titulo: 'B', concluida: true },
    ];

    render(<ListaTarefas tarefas={tarefas} />);

    expect(screen.getByLabelText('tarefa pendente')).toBeInTheDocument();
    expect(screen.getByLabelText('tarefa concluida')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });
});
