import { obterTarefas } from '@/data/tarefas';
import AppTarefas from '@/components/AppTarefas';

export default async function Page() {
  const tarefas = await obterTarefas(); // "carrega" lista simulada
  return <AppTarefas tarefasIniciais={tarefas} />;
}
