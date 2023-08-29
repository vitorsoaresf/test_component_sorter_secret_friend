import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Formulario } from "./Formulario";
import userEvent from "@testing-library/user-event";

test("quando o input esta vazio, novos participantes nao podem ser adicionados", () => {
  render(<Formulario />);

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  const bt = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(bt).toBeDisabled();
});

test("adicionar um participante caso exista um nome preenchido", () => {
  render(<Formulario />);

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  const bt = screen.getByRole("button");

  // fiveEvent eh uma opcao tbm
  userEvent.type(input, "vitor");
  userEvent.click(bt);

  expect(input).toHaveFocus();
  expect(input).toHaveValue("");
});
