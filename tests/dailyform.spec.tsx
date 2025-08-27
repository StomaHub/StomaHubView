import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import DailyForm from "../src/components/dailyForm";

describe("DailyForm", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("preenche e envia o formulário chamando fetch", async () => {
    const user = userEvent.setup();

    //mock do post no json-server
    const fetchMock = vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    } as Response);

    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<DailyForm />);

    //obtendo os inputs para realiar o preenchimento
    const dateInput = screen.getByLabelText("Data");
    const symptomsInput = screen.getByLabelText("Sintomas observados");
    const observationInput = screen.getByLabelText("Observações gerais");
    const humorInput = screen.getByLabelText("Humor");
    const submitButton = screen.getByRole("button", { name: /salvar/i });

    //preenchendo os inputs
    await user.type(dateInput, "2025-08-26");
    await user.type(symptomsInput, "Dor abdominal");
    await user.type(observationInput, "Paciente relatou desconforto leve");
    await user.type(humorInput, "Bom");

    //submetendo forms
    await user.click(submitButton);

    //verificando chamada do json-server
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:3000/daily",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: "2025-08-26",
          symptoms: "Dor abdominal",
          humor: "Bom",
          observation: "Paciente relatou desconforto leve",
        }),
      })
    );

    //checando exibição do alert
    expect(alertMock).toHaveBeenCalledWith("Especialista cadastrado com sucesso!");
  });
});
