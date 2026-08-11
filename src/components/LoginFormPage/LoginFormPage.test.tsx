import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import LoginFormPage from "./LoginFormPage";
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
  {
    username: "Swimmer",
    password: "1",
    role: Role.Swimmer,
  },
  {
    username: "Mermaid",
    password: "2",
    role: Role.Mermaid,
  },
];

const handleLogin = vi.fn();

describe("LoginFormPage", () => {
  it("displays the 'Login' h1, the other website link, the 'Username' and 'Password' inputs, and the 'Login' button, but not the error message right off the bat", () => {
    render(
      <IntlProvider locale={"en"}>
        <LoginFormPage fakeUsers={fakeUsers} handleLogin={handleLogin} />
      </IntlProvider>,
    );

    expect(screen.getAllByText("Login")[0]).toBeVisible();
    expect(
      screen.getByText("Looking for my other websites? Click"),
    ).toBeVisible();
    expect(screen.getByText("Here.")).toBeVisible();
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
        <LoginFormPage fakeUsers={fakeUsers} handleLogin={handleLogin} />
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
        <LoginFormPage fakeUsers={fakeUsers} handleLogin={handleLogin} />
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
        <LoginFormPage fakeUsers={fakeUsers} handleLogin={handleLogin} />
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
          <LoginFormPage fakeUsers={fakeUsers} handleLogin={handleLogin} />
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

  it("does not display the error message if you click the button after typing in a different right username and a right password", async () => {
    render(
      <HashRouter>
        <IntlProvider locale={"en"}>
          <LoginFormPage fakeUsers={fakeUsers} handleLogin={handleLogin} />
        </IntlProvider>
      </HashRouter>,
    );

    await userEvent.type(screen.getAllByRole("textbox")[0], "Swimmer");
    await userEvent.type(screen.getAllByRole("textbox")[1], "1");
    await userEvent.click(screen.getByRole("button"));

    expect(
      screen.queryByText("That username and/or password is not in our system."),
    ).not.toBeInTheDocument();
  });

  //  If this were a real app, I would test a wider variety of potential props
  //  that could be passed in. However, since it's just me working on this app,
  //  and I'm not planning to pass in any other fakeUsers than the
  //  1 array in App.tsx, I'm just writing this single test for differentFakeUsers.
  it("does not display the error message if you click the button after typing in a different right username and a right password, different props", async () => {
    const differentFakeUsers: User[] = [
      {
        username: "IronMan",
        password: "a",
        role: Role.ScubaDiver,
      },
      {
        username: "SpiderMan",
        password: "b",
        role: Role.Swimmer,
      },
      {
        username: "BlackWidow",
        password: "c",
        role: Role.Mermaid,
      },
    ];

    render(
      <HashRouter>
        <IntlProvider locale={"en"}>
          <LoginFormPage
            fakeUsers={differentFakeUsers}
            handleLogin={handleLogin}
          />
        </IntlProvider>
      </HashRouter>,
    );

    await userEvent.type(screen.getAllByRole("textbox")[0], "IronMan");
    await userEvent.type(screen.getAllByRole("textbox")[1], "a");
    await userEvent.click(screen.getByRole("button"));

    expect(
      screen.queryByText("That username and/or password is not in our system."),
    ).not.toBeInTheDocument();
  });
});
