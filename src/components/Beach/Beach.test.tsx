import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Beach from "./Beach";
import { IntlProvider } from "react-intl";

describe("Beach page", () => {
  it("displays 'beach'", () => {
    render(
      <IntlProvider locale={"en"}>
        <Beach />
      </IntlProvider>,
    );
    expect(screen.getByText("Beach")).toBeVisible();
  });
});
