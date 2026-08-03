import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ShallowOcean from "./ShallowOcean";
import { IntlProvider } from "react-intl";

describe("ShallowOcean page", () => {
  it("displays 'Shallow Ocean'", () => {
    render(
      <IntlProvider locale={"en"}>
        <ShallowOcean />
      </IntlProvider>,
    );
    expect(screen.getByText("Shallow Ocean")).toBeVisible();
  });
});
