'use client';

import { useState } from 'react';

type Props = {
  onAdicionar: (titulo: string) => void;
};

const MIN_LEN = 3;

export default function NovaTarefa({ onAdicionar }: Props) {
  const [titulo, setTitulo] = useState('');
  const [erro, setErro] = useState<string | null>(null);

  const valor = titulo.trim();
  const valido = valor.length >= MIN_LEN;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valido) {
      setErro(`Digite pelo menos ${MIN_LEN} caracteres.`);
      return;
    }
    onAdicionar(valor);
    setTitulo('');
    setErro(null);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitulo(e.target.value);
    if (erro && e.target.value.trim().length >= MIN_LEN) {
      setErro(null);
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-label="form-nova-tarefa">
      <div className="row">
        <input
          className="input"
          aria-label="titulo"
          placeholder="Descreva a tarefa..."
          value={titulo}
          onChange={handleChange}
        />
        <button className="btn" type="submit" disabled={!valido}>
          Adicionar
        </button>
      </div>
      <div aria-live="polite">
        {erro ? (
          <div role="alert" className="error" data-testid="erro">{erro}</div>
        ) : (
          <div className="helper">Ex.: “Estudar Next.js”</div>
        )}
      </div>
    </form>
  );
}
