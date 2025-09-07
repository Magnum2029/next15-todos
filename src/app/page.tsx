import { tarefasBase } from "@/data/tarefas";
import QuadroTarefas from "@/components/QuadroTarefas";

export default async function Page() {
  // Poderia simular um fetch/Promise.resolve aqui se quiser.
  const tarefas = tarefasBase;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
      <QuadroTarefas initial={tarefas} />
    </main>
  );
}
