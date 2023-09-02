import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hooks/useListParticipantes";
import { Sorteio } from "./Sorteio";

jest.mock("../state/hooks/useListParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

describe("na pagina de sorteio", () => {
  const participantes = ["vitor", "ana", "beto"];
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  test("todos os participantes podem exibir seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole("option");

    expect(opcoes).toHaveLength(participantes.length);
  });
});
