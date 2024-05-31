import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import "@testing-library/jest-dom";

describe("GifExpertApp", () => {
  test("debe renderizar las categorías iniciales", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("One Punch")).toBeInTheDocument();
  });

  test("debe agregar una categoría", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "Naruto" } });
    fireEvent.submit(form);

    expect(screen.getByText("Naruto")).toBeInTheDocument();
  });
});
