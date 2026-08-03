import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LoginForm from "./LoginForm";
import { IntlProvider } from "react-intl";

describe("Login page", () => {
  it("displays 'Login'", () => {
    render(
      <IntlProvider locale={"en"}>
        <LoginForm />
      </IntlProvider>,
    );
    expect(screen.getAllByText("Login")[0]).toBeVisible();
  });
});
