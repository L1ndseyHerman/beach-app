import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PageNotFoundPage from "./PageNotFoundPage";
import { IntlProvider } from "react-intl";

describe("PageNotFoundPage", () => {
  it("displays the '404' h1, MUI Icon, and paragraph", () => {
    render(
      <IntlProvider locale={"en"}>
        <PageNotFoundPage />
      </IntlProvider>,
    );
    expect(screen.getByText("404")).toBeVisible();
    //  Whoops, actually the MUI Icon isn't accessible in NVDA. It's just kind of a decoration tho,
    //  like the red border on the div, so I'm going to leave it as-is.
    expect(
      screen.getByText("Aww snap, the page you are looking for doesn't exist!"),
    ).toBeVisible();
  });
});
