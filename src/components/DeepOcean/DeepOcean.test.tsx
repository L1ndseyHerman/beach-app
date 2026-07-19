import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DeepOcean from "./DeepOcean";

describe("DeepOcean page", () => {
  it("displays 'DeepOcean'", () => {
    render(<DeepOcean />);
    expect(screen.getByText("DeepOcean")).toBeVisible();
  });
});
