import { realizarSorteio } from "./realizarSorteio";

describe("dado um sorteio de amigo secreto", () => {
  test("cada participante nao sortei o proprio nome", () => {
    const participantes = ["ana", "vitor", "fabiana", "maria", "joao"];

    const sorteio = realizarSorteio(participantes);

    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
