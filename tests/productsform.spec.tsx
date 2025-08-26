import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import type { Product } from "../src/types/types";
import ProductForm from "../src/pages/products/productForm";
import type { UseFetchResult } from "../src/hook/useFetch";

describe("ProductForm Test", () => {
  test("preenche e envia o formulário chamando fetch e add", async () => {
    const user = userEvent.setup();

    // mocks
    const closeMock = vi.fn();
    const addMock = vi.fn();

    const fetchMock = {
    fetchData: vi.fn().mockResolvedValueOnce({})
    } as unknown as UseFetchResult<Product[]>;

    render(<ProductForm close={closeMock} add={addMock} fetch={fetchMock} />);

    //obtendo os campos
    const nameInput = screen.getByPlaceholderText("Nome");
    const descInput = screen.getByPlaceholderText("Descrição");
    const priceInput = screen.getByPlaceholderText("Preço");
    const imgInput = screen.getByPlaceholderText("URL da imagem");
    const categorySelect = screen.getByRole("combobox");
    const submitButton = screen.getByRole("button", { name: /salvar/i });

    //preenchendo os inpusts do formuçario
    await user.type(nameInput, "Produto Teste");
    await user.type(descInput, "Descrição Teste");
    await user.type(priceInput, "99.90");
    await user.type(imgInput, "http://imagem.com/teste.png");
    await user.selectOptions(categorySelect, "Acessórios");

    //submetendo formulário
    await user.click(submitButton);

    //verificando se o item adicionado está correto
    expect(addMock).toHaveBeenCalledWith(
      expect.objectContaining<Product>({
        name: "Produto Teste",
        description: "Descrição Teste",
        price: "99.90",
        image: "http://imagem.com/teste.png",
        category: "Acessórios",
        button: "Comprar",
      })
    );

    // Valida que o modal foi fechado
    expect(closeMock).toHaveBeenCalled();
  });
});
