import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PageNotFoundPage from "./PageNotFoundPage";

describe("PageNotFoundPage", () => {
  it("displays '404'", () => {
    render(<PageNotFoundPage />);
    expect(screen.getByText("404")).toBeVisible();
  });
});
