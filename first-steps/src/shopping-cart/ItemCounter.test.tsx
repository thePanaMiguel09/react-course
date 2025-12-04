import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("shoud render with defaul values", () => {
    const name: string = "Test Item";
    render(<ItemCounter name={name} />);
    screen.debug();

    expect(screen.getByText(name)).toBeDefined();
  });

  test("should render with custome quanity", () => {
    const name: string = "Play";
    const quanity: number = 10;

    render(<ItemCounter name={name} quantity={quanity} />);

    expect(screen.getByText(quanity)).toBeDefined();
  });
});
