import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ShallowOcean from "./ShallowOcean";

describe("ShallowOcean page", () => {
  it("displays 'ShallowOcean'", () => {
    render(<ShallowOcean />);
    expect(screen.getByText("ShallowOcean")).toBeVisible();
  });
});
