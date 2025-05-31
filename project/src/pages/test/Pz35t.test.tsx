import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import '@testing-library/jest-dom';
import Pz35t from "../Pz35T";
import { getTanks } from "../../api";
import '@testing-library/jest-dom';



jest.mock("../../assets/pz_35_t_closeup.png", () => "mock-image");

jest.mock("../../api", () => ({
    getTanks: jest.fn(),
}));

const mockTank = {
    name: "Pz.35(t)",
    information: "This is a test tank.",
    hullArmor: "25 / 16 / 16 mm",
    turretArmor: "25 / 16 / 16 mm",
    crew: "4 persons",
    forwardSpeed: "33 km/h",
    backwardSpeed: "33 km/h",
    enginePower: "120 hp",
    weight: "10.5 tons",
    powerToWeightRatio: "11.4 hp/ton",
    mainArmament: "37 mm KwK34(t) cannon",
    ammunition: "72 rounds",
    verticalTurretRotation: "10.5 -> 15°/s",
    horizontalTurretRotation: "9.8 -> 14°/s",
    reloadSpeed: "4.3 -> 3.3 s",
    verticalGuidance: "-10 / 25°",
};

describe("Pz35t Component", () => {
    it("displays loading initially", () => {
        (getTanks as jest.Mock).mockResolvedValue({ data: [] });


        render(<Pz35t />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("renders tank data when Pz.35(t) is fetched", async () => {
        (getTanks as jest.Mock).mockResolvedValue({ data: [mockTank] });

        render(<Pz35t />);

        await waitFor(() => {
            expect(screen.getByText("Pz.35(t)")).toBeInTheDocument();
        });

        expect(screen.getByText("Tank information:")).toBeInTheDocument();
        expect(screen.getByText(mockTank.information)).toBeInTheDocument();
        expect(screen.getByText(/Hull Armor:/)).toBeInTheDocument();
        expect(screen.getAllByText(mockTank.hullArmor).length).toBeGreaterThan(0);
    });

});
