import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import UserProfileDropdown from "./UserProfileDropdown";
import { IntlProvider } from "react-intl";

describe("UserProfileDropdown", () => {
  it("displays the label text", () => {
    render(
      <IntlProvider locale={"en"}>
        <UserProfileDropdown username="ScubaDiver" handleLogout={vi.fn()} />
      </IntlProvider>,
    );
    expect(screen.getByLabelText("Welcome ScubaDiver")).toBeVisible();
  });
});
