import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PageNotFound from "./PageNotFound";

describe("PageNotFound page", () => {
  it("displays '404'", () => {
    render(<PageNotFound />);
    expect(screen.getByText("404")).toBeVisible();
  });
});
