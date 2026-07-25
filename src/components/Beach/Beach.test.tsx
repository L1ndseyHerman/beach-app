import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Beach from "./Beach";

describe("Beach page", () => {
  it("displays 'beach'", () => {
    render(<Beach />);
    expect(screen.getByText("Beach")).toBeVisible();
  });
});
