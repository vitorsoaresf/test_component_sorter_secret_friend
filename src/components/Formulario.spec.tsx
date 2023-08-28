import { render, screen } from "@testing-library/react";
import React from "react";

test("quando o input esta vazio, novos participantes nao podem ser adicionados", () => {
  render(<Formulario />);

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  const bt = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(bt).toBeDisabled();
});
