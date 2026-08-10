import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BeachPage from "./BeachPage";
import { IntlProvider } from "react-intl";

describe("BeachPage", () => {
  it("displays 'beach'", () => {
    render(
      <IntlProvider locale={"en"}>
        <BeachPage />
      </IntlProvider>,
    );
    expect(screen.getByText("Beach")).toBeVisible();
  });
});
