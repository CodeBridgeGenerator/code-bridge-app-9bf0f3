import React from "react";
import { render, screen } from "@testing-library/react";

import TrainingProvidersDescriptionCreateDialogComponent from "../TrainingProvidersDescriptionCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders trainingProvidersDescription create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TrainingProvidersDescriptionCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("trainingProvidersDescription-create-dialog-component")).toBeInTheDocument();
});
