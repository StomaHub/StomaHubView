import {render, screen} from "@testing-library/react";
import CardReport from "../src/components/cardReport";

// Verificando se o card de monitoramento é exibido adequadamente
describe("Input Form test", () => {
    const mockData =  {
        title: "Sangamento no estoma",
        description: "Sangramento persistente ou em grande quantidade",
        type: "moderado"
    }       

    it("shows the user's commment", () => {
        render(<CardReport {...mockData} />);
        expect(screen.getByText("Sangamento no estoma")).toBeInTheDocument();
    });
});