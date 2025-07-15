import LibaryPost from "../src/components/libaryPost";
import {fireEvent, render, screen} from "@testing-library/react";


describe("LibaryPost Component", () => {
    const mock = {
        id: "guia-completo",
        iconPath: "/icons/page.svg",
        title: "Guia Completo de Cuidados com Estomia",
        resume: "Manual abrangente sobre os primeiros cuidados e manutenção diária.",
        author: "Por: Dra. Maria Silva",
        date: "14/01/2024"
    };

    it("shows the libary post", () => {
        render(<LibaryPost {...mock} />);
        expect(screen.getByText('Por: Dra. Maria Silva')).toBeInTheDocument();
    });

    it("update with click", () => {
        const CLICKS = 3;

        render(<LibaryPost {...mock} />);

        const libaryPost = screen.getByText('Guia Completo de Cuidados com Estomia');

        // click's on the libary card
        fireEvent.click(libaryPost);
        fireEvent.click(libaryPost);
        fireEvent.click(libaryPost);

        expect(screen.getByText(`Possui ${CLICKS} acessos`));

    })
});