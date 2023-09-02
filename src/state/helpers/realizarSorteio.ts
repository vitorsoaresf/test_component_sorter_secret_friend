import shuffle from "just-shuffle";

export const realizarSorteio = (participantes: Array<string>) => {
  const totalParticipantes = participantes.length;
  const embaralhado = shuffle(participantes);
  const resultado = new Map<string, string>();

  for (let index = 0; index < totalParticipantes; index++) {
    const indiceDoAmigo = index === totalParticipantes - 1 ? 0 : index + 1;

    resultado.set(embaralhado[index], embaralhado[indiceDoAmigo]);
  }

  return resultado;
};
