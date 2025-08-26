import SearchComponent from "../src/components/search";
import {fireEvent, render, screen} from "@testing-library/react";

// Verificando se o input de filtro de pesquisa de produto funciona corretamente (inserindo algo nele, algo antes não feito em testes)
describe("Input Form test", () => {
  const mockData = {
    comboBox: ["Todos", "Cuidados essenciais", "Aulas", "Cursos Completos", "Dia a Dia"],
    placeholder: "Pesquise aqui"
  };

    it("shows the user's commment", () => {
        render(<SearchComponent {...mockData} />);
        expect(screen.getByText("Todos")).toBeInTheDocument();
    });

    it("entry with a text and checking", () => {
        render(<SearchComponent {...mockData} />);

        const input = screen.getByPlaceholderText("Pesquise aqui");

        fireEvent.change(input, { target: { value: "Aulas"}});

        expect(input).toHaveValue("Aulas");
    });
});