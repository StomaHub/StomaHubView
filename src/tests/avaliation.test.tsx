import Avaliation from "../components/avaliation";
import {render, screen} from "@testing-library/react";


describe("Avaliation Component", () => {
    const mockData = {
        stars: 4,
        comment: "Ótimo produto!",
        userName: "John Willian",
        age: 30
    };

    it("shows the user's commment", () => {
        render(<Avaliation {...mockData} />);
        expect(screen.getByText('"Ótimo produto!"')).toBeInTheDocument();
    });

        it("shows the user's name and age", () => {
        render(<Avaliation {...mockData} />);
        expect(screen.getByText(mockData.userName)).toBeInTheDocument();
        expect(screen.getByText(`${mockData.age} anos`)).toBeInTheDocument();
    });

    it("displays the correct number of stars", () => {
        render(<Avaliation {...mockData} />);
        const stars = screen.getAllByTestId("star");
        expect(stars).toHaveLength(mockData.stars);
    });
});



