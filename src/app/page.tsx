import { tarefasIniciais } from "@/data/tarefas";
import NovaTarefa from "@/components/NovaTarefa";

export default async function Page() {
  const tarefas = await Promise.resolve(tarefasIniciais);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
      <NovaTarefa />
    </div>
  );
}
