import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import UserProfileDropdown from "./UserProfileDropdown";
import { IntlProvider } from "react-intl";
import userEvent from "@testing-library/user-event";
import { HashRouter } from "react-router-dom";

const username = "ScubaDiver";
const handleLogout = vi.fn();
const loginUrl = "/login";

describe("UserProfileDropdown", () => {
  it("displays the current user's username in the Autocomplete's label", () => {
    render(
      <IntlProvider locale={"en"}>
        <UserProfileDropdown
          username={username}
          handleLogout={handleLogout}
          loginUrl={loginUrl}
        />
      </IntlProvider>,
    );
    expect(screen.getByLabelText("Welcome ScubaDiver")).toBeVisible();
  });

  it("can display a different username if the user is different", () => {
    render(
      <IntlProvider locale={"en"}>
        <UserProfileDropdown
          username="Swimmer"
          handleLogout={handleLogout}
          loginUrl={loginUrl}
        />
      </IntlProvider>,
    );
    expect(screen.getByLabelText("Welcome Swimmer")).toBeVisible();
  });

  it("opens the dropdown if you click the down arrow icon, and the only option in it is Logout", async () => {
    render(
      <HashRouter>
        <IntlProvider locale={"en"}>
          <UserProfileDropdown
            username={username}
            handleLogout={handleLogout}
            loginUrl={loginUrl}
          />
        </IntlProvider>
      </HashRouter>,
    );

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getAllByRole("option")[0]).toBeVisible();
    expect(screen.getAllByRole("option")[0]).toHaveTextContent("Logout");
  });

  //  Anything involving filtering is WAY overkill for only 1 option, but eh the feature exists.
  it("lets you type to filter the options, partially and case-insensitively", async () => {
    render(
      <HashRouter>
        <IntlProvider locale={"en"}>
          <UserProfileDropdown
            username={username}
            handleLogout={handleLogout}
            loginUrl={loginUrl}
          />
        </IntlProvider>
      </HashRouter>,
    );

    await userEvent.type(screen.getByRole("textbox"), "lOG");

    expect(screen.getAllByRole("option")[0]).toBeVisible();
    expect(screen.getAllByRole("option")[0]).toHaveTextContent("Logout");
  });

  it("shows the No Options text if you type something that's not contained in Logout", async () => {
    render(
      <HashRouter>
        <IntlProvider locale={"en"}>
          <UserProfileDropdown
            username={username}
            handleLogout={handleLogout}
            loginUrl={loginUrl}
          />
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
