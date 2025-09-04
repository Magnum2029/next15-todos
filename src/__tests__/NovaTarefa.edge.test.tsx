import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NovaTarefa from '@/components/NovaTarefa';

describe('<NovaTarefa /> — casos de borda', () => {
  it('não permite submissão com apenas espaços', async () => {
    const user = userEvent.setup();
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const input = screen.getByLabelText('titulo');
    const button = screen.getByRole('button', { name: /adicionar/i });

    await user.type(input, '   ');
    expect(button).toBeDisabled();

    await user.click(button);
    expect(onAdicionar).not.toHaveBeenCalled();
    expect(screen.getByTestId('erro')).toHaveTextContent('Digite pelo menos 3 caracteres.');
  });

  it('mostra erro quando inválido e limpa o erro quando válido', async () => {
    const user = userEvent.setup();
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const input = screen.getByLabelText('titulo');
    const button = screen.getByRole('button', { name: /adicionar/i });

    // Inválido
    await user.type(input, 'Oi');
    await user.click(button);
    expect(screen.getByRole('alert')).toBeInTheDocument();

    // Corrige para válido (>=3)
    await user.clear(input);
    await user.type(input, 'Aprender testes');
    expect(button).toBeEnabled();
    expect(screen.queryByRole('alert')).toBeNull();
  });

  it('submete com Enter e reseta o campo', async () => {
    const user = userEvent.setup();
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const input = screen.getByLabelText('titulo');

    await user.type(input, 'Fazer commits{enter}');
    expect(onAdicionar).toHaveBeenCalledTimes(1);
    expect(onAdicionar).toHaveBeenCalledWith('Fazer commits');
    expect((input as HTMLInputElement).value).toBe('');
  });

  it('não chama onAdicionar quando botão está desabilitado', async () => {
    const user = userEvent.setup();
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const button = screen.getByRole('button', { name: /adicionar/i });
    expect(button).toBeDisabled();

    await user.click(button);
    expect(onAdicionar).not.toHaveBeenCalled();
  });
});
