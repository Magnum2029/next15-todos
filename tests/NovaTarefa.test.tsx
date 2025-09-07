import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

test("adiciona uma nova tarefa", () => {
  render(<NovaTarefa />);
  const input = screen.getByTestId("input-tarefa");
  const botao = screen.getByTestId("btn-adicionar");

  fireEvent.change(input, { target: { value: "Nova tarefa" } });
  fireEvent.click(botao);

  expect(screen.getByText("Nova tarefa")).toBeInTheDocument();
});
