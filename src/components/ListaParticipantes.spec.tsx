import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { ListaParticipantes } from "./ListaParticipantes";
import { useListaParticipantes } from "../state/hooks/useListParticipantes";

jest.mock("../state/hooks/useListParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

describe("uma lista inicialmente vazia de partipantes", () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });

  test("deve ser renderizar sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });
});

describe("uma lista preenchida de partipantes", () => {
  const participantes = ["Ana", "Catarina"];
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  test("deve ser renderizar com elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(participantes.length);
  });
});
