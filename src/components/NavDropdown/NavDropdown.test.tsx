import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NavDropdown from "./NavDropdown";
import { HashRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

describe("NavDropdown", () => {
  it("displays the label text", () => {
    render(
      <HashRouter>
        <IntlProvider locale={"en"}>
          <NavDropdown urls={["/in_progress"]} />
        </IntlProvider>
      </HashRouter>,
    );
    expect(screen.getByLabelText("Select a Page to View")).toBeVisible();
  });
});
