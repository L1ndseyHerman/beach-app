import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LoginForm from "./LoginForm";
import { IntlProvider } from "react-intl";
import userEvent from "@testing-library/user-event";
import { HashRouter } from "react-router-dom";
import { Role, type User } from "../../constants";

const fakeUsers: User[] = [
  {
    username: "ScubaDiver",
    password: "0",
    role: Role.ScubaDiver,
  },
];

describe("Login page", () => {
  it("displays the 'Login' h1, the 'Username' and 'Password' inputs, and the 'Login' button, but not the error message right off the bat", () => {
    render(
      <IntlProvider locale={"en"}>
        <LoginForm fakeUsers={fakeUsers} />
      </IntlProvider>,
    );

    expect(screen.getAllByText("Login")[0]).toBeVisible();
    expect(
      screen.queryByText("That username and/or password is not in our system."),
    ).not.toBeInTheDocument();
    //  There's actually a label AND a placeholder that switch places inside a MUI <TextField />!
    expect(screen.getAllByText("Username")[0]).toBeVisible();
    expect(screen.getAllByRole("textbox")[0]).toBeVisible();
    expect(screen.getAllByText("Password")[0]).toBeVisible();
    expect(screen.getAllByRole("textbox")[1]).toBeVisible();
    expect(screen.getByRole("button")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("Login");
  });

  it("displays the error message if you click the button after typing in a wrong username", async () => {
    render(
      <IntlProvider locale={"en"}>
        <LoginForm fakeUsers={fakeUsers} />
      </IntlProvider>,
    );

    await userEvent.type(screen.getAllByRole("textbox")[0], "a");
    await userEvent.type(screen.getAllByRole("textbox")[1], "0");
    await userEvent.click(screen.getByRole("button"));

    expect(
      screen.getByText("That username and/or password is not in our system."),
    ).toBeVisible();
  });

  it("displays the error message if you click the button after typing in a wrong password", async () => {
    render(
      <IntlProvider locale={"en"}>
        <LoginForm fakeUsers={fakeUsers} />
      </IntlProvider>,
    );

    await userEvent.type(screen.getAllByRole("textbox")[0], "ScubaDiver");
    await userEvent.type(screen.getAllByRole("textbox")[1], "-1");
    await userEvent.click(screen.getByRole("button"));

    expect(
      screen.getByText("That username and/or password is not in our system."),
    ).toBeVisible();
  });

  it("displays the error message if you click the button after typing in a wrong username AND a wrong password", async () => {
    render(
      <IntlProvider locale={"en"}>
        <LoginForm fakeUsers={fakeUsers} />
      </IntlProvider>,
    );

    await userEvent.type(screen.getAllByRole("textbox")[0], "a");
    await userEvent.type(screen.getAllByRole("textbox")[1], "-1");
    await userEvent.click(screen.getByRole("button"));

    expect(
      screen.getByText("That username and/or password is not in our system."),
    ).toBeVisible();
  });

  it("does not display the error message if you click the button after typing in a right username and a right password", async () => {
    render(
      <HashRouter>
        <IntlProvider locale={"en"}>
          <LoginForm fakeUsers={fakeUsers} />
        </IntlProvider>
      </HashRouter>,
    );

    await userEvent.type(screen.getAllByRole("textbox")[0], "ScubaDiver");
    await userEvent.type(screen.getAllByRole("textbox")[1], "0");
    await userEvent.click(screen.getByRole("button"));

    expect(
      screen.queryByText("That username and/or password is not in our system."),
    ).not.toBeInTheDocument();
  });
});
