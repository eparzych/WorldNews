import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "../Sidebar/Sidebar";

describe("Sidebar Component", () => {
    test("Should render sidebar title", () => {
        render (
            <Provider store={store}>
                <MemoryRouter>
                    <Sidebar/>
                </MemoryRouter>
            </Provider>
        );
        const title = screen.getByTestId("sidebar-title");
        expect(title).toHaveTextContent("INFORMACJE Z KRAJU");
    })
    test("Should render sidebar: country name and country flag", () => {
        render (
            <Provider store={store}>
                <MemoryRouter>
                    <Sidebar/>
                </MemoryRouter>
            </Provider>
        );
        const countryNamePL = screen.getByTestId("sidebar-country-name-pl");
        const countryNameUS = screen.getByTestId("sidebar-country-name-us");

        expect(countryNamePL).toHaveTextContent("Polska");
        expect(countryNameUS).toHaveTextContent("USA");
    })
})
