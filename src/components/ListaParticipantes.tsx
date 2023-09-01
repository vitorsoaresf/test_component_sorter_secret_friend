import { useListaParticipantes } from "../state/hooks/useListParticipantes";

export const ListaParticipantes = () => {
  const participantes: Array<string> = useListaParticipantes();

  return (
    <ul>
      {participantes.map((participante) => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  );
};
