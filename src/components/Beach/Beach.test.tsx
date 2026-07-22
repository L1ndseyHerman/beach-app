import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Beach from "./Beach";
import { HashRouter } from "react-router-dom";

describe("Beach page", () => {
  it("displays 'beach'", () => {
    render(
      <HashRouter>
        <Beach />
      </HashRouter>,
    );
    expect(screen.getByText("Beach")).toBeVisible();
  });
});
