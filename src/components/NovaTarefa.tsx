"use client";

import { useState } from "react";

export default function NovaTarefa() {
  const [texto, setTexto] = useState("");

  const adicionar = () => {
    if (texto.trim().length < 3) return;
    alert("Nova tarefa: " + texto);
    setTexto("");
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg space-y-3">
      <h2 className="text-lg font-semibold">Adicionar</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Descreva a tarefa..."
          className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={adicionar}
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Adicionar
        </button>
      </div>
      <p className="text-sm text-gray-400">
        Ex: “Estudar Next.js” <br />
        Dica: mínimo 3 caracteres. Você pode pressionar Enter para enviar.
      </p>
    </div>
  );
}
