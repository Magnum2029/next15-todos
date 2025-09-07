import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NovaTarefa from "./NovaTarefa";

describe("<NovaTarefa />", () => {
  test("renderiza título, input e botão", () => {
    render(<NovaTarefa />);
    expect(screen.getByText(/Adicionar/i)).toBeInTheDocument();
    expect(screen.getByTestId("input-tarefa")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Adicionar/i })).toBeInTheDocument();
  });

  test("mostra erro quando tamanho é menor que o mínimo após interação", async () => {
    const user = userEvent.setup();
    render(<NovaTarefa minLength={3} />);

    const input = screen.getByTestId("input-tarefa");
    // digitar 2 chars e disparar blur
    await act(async () => {
      await user.type(input, "ab");
    });

    // blur para marcar touched
    await act(async () => {
      input.blur();
    });

    const errorRegion = screen.getByTestId("error-msg");
    expect(errorRegion).toHaveTextContent(/mínimo 3 caracteres/i);
    // quando há erro e touched, deve ter role alert (acessível)
    expect(errorRegion).toHaveAttribute("role", "alert");

    // botão desabilitado
    const button = screen.getByRole("button", { name: /Adicionar/i });
    expect(button).toBeDisabled();
  });

  test("habilita o botão quando atinge o mínimo e limpa após submit", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();
    render(<NovaTarefa minLength={3} onAdd={onAdd} />);

    const input = screen.getByTestId("input-tarefa");
    const button = screen.getByRole("button", { name: /Adicionar/i });

    await act(async () => {
      await user.type(input, "Nova tarefa");
    });

    expect(button).toBeEnabled();

    await act(async () => {
      await user.click(button);
    });

    expect(onAdd).toHaveBeenCalledWith("Nova tarefa");
    expect((input as HTMLInputElement).value).toBe("");
  });

  test("envia pelo Enter", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();
    render(<NovaTarefa onAdd={onAdd} />);

    const input = screen.getByTestId("input-tarefa");

    await act(async () => {
      await user.type(input, "Estudar Next.js{enter}");
    });

    expect(onAdd).toHaveBeenCalledWith("Estudar Next.js");
  });
});
