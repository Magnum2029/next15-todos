import { renderHook } from '@testing-library/react';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';
import type { Tarefa } from '@/data/tarefas';

describe('useContadorDeTarefas', () => {
  it('retorna o total correto e reage a mudanças', () => {
    const base: Tarefa[] = [
      { id: '1', titulo: 'A', concluida: false },
      { id: '2', titulo: 'B', concluida: false }
    ];

    const { result, rerender } = renderHook(
      ({ lista }) => useContadorDeTarefas(lista),
      { initialProps: { lista: base } }
    );

    expect(result.current).toBe(2);

    const novaLista = [...base, { id: '3', titulo: 'C', concluida: true }];
    rerender({ lista: novaLista });

    expect(result.current).toBe(3);
  });
});
