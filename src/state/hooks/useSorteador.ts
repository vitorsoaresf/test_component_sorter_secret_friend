import shuffle from "just-shuffle";
import { useListaParticipantes } from "./useListParticipantes";
import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecreto } from "../atom";

export const useSorteador = () => {
  const participantes = useListaParticipantes();

  return () => {
    const totalParticipantes = participantes.length;
    const embaralhado = shuffle(participantes);
    const resultado = new Map<string, string>();
    const setResultado = useSetRecoilState(resultadoAmigoSecreto);

    for (let index = 0; index < totalParticipantes; index++) {
      const indiceDoAmigo = index === totalParticipantes - 1 ? 0 : index + 1;

      resultado.set(embaralhado[index], embaralhado[indiceDoAmigo]);
    }

    setResultado(resultado);
  };
};
