import Card from "../src/components/card";
import {render, screen} from "@testing-library/react";

// Verificando se o card de produtos é exibido adequadamente
describe("Input Form test", () => {
  const mockData = {
      id: "a40cb709-0de5-4705-8ea9-e42987d32e4b",
      name: "Bolsa",
      description: "Coletora",
      price: "23.00",
      image: "",
      category: "Bolsas coletoras",
      button: "Comprar"
    }

    it("shows the user's commment", () => {
        render(<Card {...mockData} />);
        expect(screen.getByText("Bolsa")).toBeInTheDocument();
    });

    // Checando exibição das demais informações
    it("entry with a text and checking", () => {
        render(<Card {...mockData} />);

        expect(screen.getByText("Comprar")).toBeInTheDocument();

        expect(screen.getByText("23.00")).toBeInTheDocument();

        expect(screen.getByText("Comprar")).toBeInTheDocument();
    });
});