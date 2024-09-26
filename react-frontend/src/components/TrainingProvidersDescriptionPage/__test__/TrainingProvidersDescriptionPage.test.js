import React from "react";
import { render, screen } from "@testing-library/react";

import TrainingProvidersDescriptionPage from "../TrainingProvidersDescriptionPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders trainingProvidersDescription page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TrainingProvidersDescriptionPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("trainingProvidersDescription-datatable")).toBeInTheDocument();
    expect(screen.getByRole("trainingProvidersDescription-add-button")).toBeInTheDocument();
});
