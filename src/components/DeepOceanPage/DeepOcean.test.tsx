import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DeepOceanPage from "./DeepOceanPage";
import { IntlProvider } from "react-intl";

describe("DeepOceanPage", () => {
  it("displays 'Deep Ocean'", () => {
    render(
      <IntlProvider locale={"en"}>
        <DeepOceanPage />
      </IntlProvider>,
    );
    expect(screen.getByText("Deep Ocean")).toBeVisible();
  });
});
