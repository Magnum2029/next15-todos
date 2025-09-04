import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('Página (Server Component)', () => {
  it('renderiza tarefas iniciais e contador sem mock externo', async () => {
    const ui = await Page(); // server component retorna uma Promise<ReactElement>
    render(ui);

    // Títulos das tarefas do seed
    expect(await screen.findByText(/Estudar Next\.js/i)).toBeInTheDocument();
    expect(screen.getByText(/Revisar TypeScript/i)).toBeInTheDocument();
    expect(screen.getByText(/Escrever testes/i)).toBeInTheDocument();

    // Contador
    expect(screen.getByTestId('contador')).toHaveTextContent('Total: 3 tarefas');
  });
});
