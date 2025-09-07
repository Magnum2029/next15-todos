import { tarefas } from "@/data/tarefas";
import NovaTarefa from "@/components/NovaTarefa";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

export default function Page() {
  const total = useContadorDeTarefas(tarefas);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center">
      <div className="w-full max-w-2xl space-y-6 p-6 bg-gray-900/70 rounded-xl shadow-lg border border-gray-700">
        
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Minhas Tarefas</h1>
          <span className="px-3 py-1 rounded-full text-sm bg-blue-600">
            Total {total}
          </span>
        </header>

        <NovaTarefa />

        <section>
          <h2 className="text-lg font-semibold mb-3">Lista</h2>
          <ul className="space-y-2">
            {tarefas.map((tarefa) => (
              <li
                key={tarefa.id}
                className={`flex items-center justify-between px-4 py-2 rounded-lg shadow-sm ${
                  tarefa.concluida
                    ? "bg-green-900/50 text-green-300"
                    : "bg-gray-800 text-gray-200"
                }`}
              >
                {tarefa.nome}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

