import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hook/useFetchGifs";

//-- Mockear el hook useFetchGifs
jest.mock("../../src/hook/useFetchGifs");

describe("Pruebas en el componente <GifGrid />", () => {

    const category = "One Punch";

    test("Debe de mostrar el loading inicial", () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GiftGrid category={category} />);
        // screen.debug();
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));

    });

    test("Debe de mostrar items cuando se cargan imágenes useFetchGifs", () => {   
        
        const gifs = [
            {
                id: "ABC",
                title: "Cualquier cosa 1",
                url: "https://localhost/cualquier.jpg",
            },
            {
                id: "123",
                title: "Cualquier cosa 2",
                url: "https://localhost/cualquier.jpg",
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GiftGrid category={category} />);
        // screen.debug();
        expect(screen.getAllByRole("img").length).toBe(gifs.length);

    });

});