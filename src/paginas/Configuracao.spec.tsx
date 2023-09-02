import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Configuracao } from "./Configuracao";

const mockNavigation = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigation,
  };
});

describe("descreve uma pagina de configuracao", () => {
  test("deve ser renderizada corretamente", () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
