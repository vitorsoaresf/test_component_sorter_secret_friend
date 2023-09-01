import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Rodape } from "./Rodape";

describe("onde nao existem participantes suficientes ", () => {
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
