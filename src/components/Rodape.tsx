import { useListaParticipantes } from "../state/hooks/useListParticipantes";
import { useNavigate } from "react-router-dom";
export const Rodape = () => {
  const participantes = useListaParticipantes();

  //   const navigation = useNavigate();

  return (
    <footer>
      <button disabled={participantes.length < 3}>Iniciar brincadeira</button>
    </footer>
  );
};
