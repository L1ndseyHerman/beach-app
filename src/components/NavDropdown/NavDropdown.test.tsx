import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NavDropdown from "./NavDropdown";
import { HashRouter } from "react-router-dom";

describe("NavDropdown page", () => {
  it("displays the label text", () => {
    render(
      <HashRouter>
        <NavDropdown urls={["/in_progress"]} />
      </HashRouter>,
    );
    expect(screen.getByLabelText("Select Option")).toBeVisible();
  });
});
