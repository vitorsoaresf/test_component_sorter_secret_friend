import { useState } from "react";
import { useListaParticipantes } from "../state/hooks/useListParticipantes";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";

export const Sorteio = () => {
  const participantes = useListaParticipantes();
  const [participanteDaVez, setParticipanteDaVez] = useState<string>("");
  const [amigoSecreto, setAmigoSecreto] = useState<string>("");
  const resultado = useResultadoSorteio();

  const sortear = (evento: any) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <section>
      <h2>Quem vai tirar o papelzinho?</h2>
      <form onSubmit={sortear}>
        <select
          required
          name="participanteDavez"
          id="participanteDavez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={(evento) => setParticipanteDaVez(evento.target.value)}
        >
          {participantes?.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
        <button>sortear</button>
      </form>
      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </section>
  );
};
