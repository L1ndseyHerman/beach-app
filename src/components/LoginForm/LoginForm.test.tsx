import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LoginForm from "./LoginForm";

describe("Login page", () => {
  it("displays 'Login'", () => {
    render(<LoginForm />);
    expect(screen.getByText("Login")).toBeVisible();
  });
});
