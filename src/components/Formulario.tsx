import { useState, useRef } from "react";
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante";

export const Formulario = () => {
  const [nome, setNome] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={(e) => adicionarParticipante(e)}>
      <input
        ref={inputRef}
        value={nome}
        type="text"
        onChange={(e) => setNome(e.target.value)}
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!nome}>Adicionar</button>
    </form>
  );
};
