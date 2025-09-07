"use client";

import { useCallback, useMemo, useState, KeyboardEvent } from "react";

export type NovaTarefaProps = {
  onAdd?: (texto: string) => void;
  minLength?: number;
};

export default function NovaTarefa({ onAdd, minLength = 3 }: NovaTarefaProps) {
  const [texto, setTexto] = useState("");
  const [touched, setTouched] = useState(false);

  const value = texto.trim();
  const isTooShort = value.length > 0 && value.length < minLength;
  const isEmpty = value.length === 0;
  const canSubmit = !isEmpty && !isTooShort;

  const errorMsg = useMemo(() => {
    if (isTooShort) return `Mínimo ${minLength} caracteres.`;
    return "";
  }, [isTooShort, minLength]);

  const handleSubmit = useCallback(() => {
    setTouched(true);
    if (!canSubmit) return;
    onAdd?.(value);
    setTexto("");
    setTouched(false);
  }, [canSubmit, onAdd, value]);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg space-y-3">
      <h2 className="text-lg font-semibold">Adicionar</h2>

      <div className="flex gap-2">
        <input
          data-testid="input-tarefa"
          aria-label="Descrição da tarefa"
          aria-invalid={!!errorMsg}
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onBlur={() => setTouched(true)}
          onKeyDown={onKeyDown}
          placeholder="Descreva a tarefa..."
          className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="button"
          aria-label="Adicionar tarefa"
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="px-4 py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700"
        >
          Adicionar
        </button>
      </div>

      <p className="text-sm text-gray-400">
        Ex: “Estudar Next.js”
        <br />
        Dica: mínimo {minLength} caracteres. Você pode pressionar Enter para enviar.
      </p>

      {/* Região de erro para testes e acessibilidade */}
      <div
        data-testid="error-msg"
        role={errorMsg && touched ? "alert" : undefined}
        aria-live="polite"
        className="min-h-5 text-sm text-red-400"
      >
        {touched && errorMsg}
      </div>
    </div>
  );
}
