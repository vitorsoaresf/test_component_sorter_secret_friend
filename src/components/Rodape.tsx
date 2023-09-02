import { useListaParticipantes } from "../state/hooks/useListParticipantes";
import { useNavigate } from "react-router-dom";
import "./Rodape.css";

export const Rodape = () => {
  const participantes = useListaParticipantes();

  const navigation = useNavigate();
  const iniciar = () => {
    navigation("/sorteio");
  };

  return (
    <footer>
      <button
        className="botao"
        onClick={iniciar}
        disabled={participantes.length < 3}
      >
        Iniciar brincadeira
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};
