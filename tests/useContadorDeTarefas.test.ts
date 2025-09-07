import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

test("retorna a quantidade de tarefas", () => {
  const { result, rerender } = renderHook(({ tarefas }) =>
    useContadorDeTarefas(tarefas),
    { initialProps: { tarefas: ["A", "B"] } }
  );

  expect(result.current).toBe(2);

  rerender({ tarefas: ["A", "B", "C"] });
  expect(result.current).toBe(3);
});
