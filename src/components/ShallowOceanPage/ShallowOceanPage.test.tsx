import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ShallowOceanPage from "./ShallowOceanPage";
import { IntlProvider } from "react-intl";

describe("ShallowOceanPage", () => {
  it("displays 'Shallow Ocean'", () => {
    render(
      <IntlProvider locale={"en"}>
        <ShallowOceanPage />
      </IntlProvider>,
    );
    expect(screen.getByText("Shallow Ocean")).toBeVisible();
  });
});
