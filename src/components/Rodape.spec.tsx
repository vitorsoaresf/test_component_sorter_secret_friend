import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Rodape } from "./Rodape";
import { useListaParticipantes } from "../state/hooks/useListParticipantes";
import userEvent from "@testing-library/user-event";

jest.mock("../state/hooks/useListParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

const mockNavigation = jest.fn();
const mockSorteio = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigation,
  };
});

jest.mock("../state/hooks/useSorteador", () => {
  return {
    useSorteador: () => mockSorteio,
  };
});

describe("quando nao existem participantes suficientes ", () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });
  test("a brincandeira nao pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const bt = screen.getByRole("button");
    expect(bt).toBeDisabled();
  });
});

describe("quando existem participantes suficientes ", () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([
      "vitor",
      "vitor",
      "vitor",
    ]);
  });

  test("a brincandeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const bt = screen.getByRole("button");
    expect(bt).not.toBeDisabled();
  });

  test("a brincadeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const bt = screen.getByRole("button");

    userEvent.click(bt);
    expect(mockNavigation).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledWith("/sorteio");
    expect(mockSorteio).toHaveBeenCalledTimes(1);
  });
});
