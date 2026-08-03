import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DeepOcean from "./DeepOcean";
import { IntlProvider } from "react-intl";

describe("DeepOcean page", () => {
  it("displays 'Deep Ocean'", () => {
    render(
      <IntlProvider locale={"en"}>
        <DeepOcean />
      </IntlProvider>,
    );
    expect(screen.getByText("Deep Ocean")).toBeVisible();
  });
});
