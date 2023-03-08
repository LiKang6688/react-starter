/* eslint-disable testing-library/prefer-find-by */
import { screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import renderWithProviders from "../../../../test-utils";

import Root from "../Root";

describe("Root", () => {
  it("renders headline", async () => {
    renderWithProviders(<Root />);

    // check if App components renders headline
    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/i)
    ).toBeInTheDocument();

    await waitFor(
      () => expect(screen.getByText(/Bitcoin/)).toBeInTheDocument(),
      {
        timeout: 1200,
      }
    );
  });
});
