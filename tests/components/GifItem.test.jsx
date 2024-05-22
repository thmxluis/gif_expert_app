import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test en <GifItem />", () => {
  const title = "Goku";
  const url = "https://localhost/algo.jpg";
  test("Mostrar Snapshot", () => {
    const { wrapper } = render(<GifItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostar la imagen con el URL y alt de los props", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    // Otra forma de hacerlo
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe de mostrar el titulo del componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
