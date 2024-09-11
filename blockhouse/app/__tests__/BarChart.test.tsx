import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import BarChart from "../components/BarChart";
import "@testing-library/jest-dom";

// Mock the axios module
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("BarChart Component", () => {
    it("renders the BarChart component successfully", async () => {
        // Mock the API response
        const mockData = {
            labels: ["January", "February", "March"],
            data: [10, 20, 30],
        };
        mockedAxios.get.mockResolvedValueOnce({ data: mockData });

        render(<BarChart />);

        // Check if the heading is rendered
        expect(screen.getByText("Bar Chart")).toBeInTheDocument();

    });

    it("displays an error message when the API call fails", async () => {
        // Mock the API error
        mockedAxios.get.mockRejectedValueOnce(new Error("API Error"));

        render(<BarChart />);

        // Wait for the error message to be rendered
        await waitFor(() => {
            expect(screen.getByText("Cannot fetch details for Bar Chart")).toBeInTheDocument();
        });
    });
});
