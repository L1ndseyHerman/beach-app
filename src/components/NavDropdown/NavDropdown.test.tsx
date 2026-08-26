import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NavDropdown from "./NavDropdown";
import { HashRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import userEvent from "@testing-library/user-event";

const urls = ["/beach", "/shallow_ocean", "/deep_ocean"];

describe("NavDropdown", () => {
  it("displays Select a Page to View in the Autocomplete's label", () => {
    render(
      <HashRouter>
        <IntlProvider locale={"en"}>
          <NavDropdown urls={urls} />
        </IntlProvider>
      </HashRouter>,
    );

    expect(screen.getByLabelText("Select a Page to View")).toBeVisible();
  });

  it("opens the dropdown if you click the down arrow icon, and it has the urls as options", async () => {
    render(
      <HashRouter>
        <IntlProvider locale={"en"}>
          <NavDropdown urls={urls} />
        </IntlProvider>
      </HashRouter>,
    );

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getAllByRole("option")[0]).toBeVisible();
    expect(screen.getAllByRole("option")[0]).toHaveTextContent("Beach");

    expect(screen.getAllByRole("option")[1]).toBeVisible();
    expect(screen.getAllByRole("option")[1]).toHaveTextContent("Shallow Ocean");

    expect(screen.getAllByRole("option")[2]).toBeVisible();
    expect(screen.getAllByRole("option")[2]).toHaveTextContent("Deep Ocean");
  });

  it("can display a different number of urls if the number is different", async () => {
    render(
      <HashRouter>
        <IntlProvider locale={"en"}>
          <NavDropdown urls={["/shallow_ocean", "/deep_ocean"]} />
        </IntlProvider>
      </HashRouter>,
    );

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getAllByRole("option")[0]).toBeVisible();
    expect(screen.getAllByRole("option")[0]).toHaveTextContent("Shallow Ocean");

    expect(screen.getAllByRole("option")[1]).toBeVisible();
    expect(screen.getAllByRole("option")[1]).toHaveTextContent("Deep Ocean");
  });

  //  Anything involving filtering is WAY overkill for only 3 options, but eh the feature exists.
  it("lets you type to filter the options, partially and case-insensitively", async () => {
    render(
      <HashRouter>
        <IntlProvider locale={"en"}>
          <NavDropdown urls={urls} />
        </IntlProvider>
      </HashRouter>,
    );

    await userEvent.type(screen.getByRole("textbox"), "AlLoW");

    expect(screen.getAllByRole("option")[0]).toBeVisible();
    expect(screen.getAllByRole("option")[0]).toHaveTextContent("Shallow Ocean");
  });

  it("shows the No Options text if you type something that's not contained in any option", async () => {
    render(
      <HashRouter>
        <IntlProvider locale={"en"}>
          <NavDropdown urls={urls} />
        </IntlProvider>
      </HashRouter>,
    );

    await userEvent.type(screen.getByRole("textbox"), "lOgIn");

    expect(screen.getAllByRole("presentation")[0]).toBeVisible();
    expect(screen.getAllByRole("presentation")[0]).toHaveTextContent(
      "No options",
    );
  });
});
