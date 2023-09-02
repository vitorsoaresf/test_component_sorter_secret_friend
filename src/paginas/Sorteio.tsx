import { useListaParticipantes } from "../state/hooks/useListParticipantes";

export const Sorteio = () => {
  const participantes = useListaParticipantes();
  return (
    <section>
      <form>
        <select name="participanteDavez" id="participanteDavez">
          {participantes?.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
      </form>
    </section>
  );
};
