import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchComponent from "../src/components/search";

describe("Search Component", () => {
  const mock = {
    comboBox: ["Todos", "Cuidados básicos", "Tutoriais", "Nutrição", "Sinais de alerta"],
    placeholder: "Pesquise aqui"
  };

  it("show search component", () => {
    render(<SearchComponent {...mock} />);
    
    expect(screen.getByPlaceholderText("Pesquise aqui")).toBeInTheDocument();

    expect(screen.getByRole("option", { name: "Tutoriais" })).toBeInTheDocument();
  });

  it("selection in combo box", async () => {
    render(<SearchComponent {...mock} />);
    
    const select = screen.getByRole("combobox");

    await userEvent.selectOptions(select, "Nutrição");

    const option = screen.getByRole("option", { name: "Nutrição" });
    expect(option.selected).toBe(true);
  });
});
