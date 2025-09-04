import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NovaTarefa from '@/components/NovaTarefa';

describe('<NovaTarefa />', () => {
  it('valida entrada e dispara submissão', async () => {
    const user = userEvent.setup();
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const input = screen.getByLabelText('titulo');
    const button = screen.getByRole('button', { name: /adicionar/i });

    // Começa inválido
    expect(button).toBeDisabled();

    // Menos de 3 caracteres: segue desabilitado
    await user.type(input, 'Oi');
    expect(button).toBeDisabled();

    // Agora válido
    await user.clear(input);
    await user.type(input, 'Nova tarefa');
    expect(button).toBeEnabled();

    // Submete
    await user.click(button);
    expect(onAdicionar).toHaveBeenCalledWith('Nova tarefa');

    // Limpa campo
    expect((input as HTMLInputElement).value).toBe('');
  });
});
