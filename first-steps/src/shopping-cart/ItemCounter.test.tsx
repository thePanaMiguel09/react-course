import { fireEvent, render, screen } from "@testing-library/react";
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

  test("shoul increase +1 button pressed", () => {
    render(<ItemCounter name="Test Item" quantity={1} />);

    const [, buttonAdd] = screen.getAllByRole("button");

    fireEvent.click(buttonAdd);

    expect(screen.getByText("2")).toBeDefined();
  });

  test("should decrease count when -1 button is clicked", () => {
    const quanity: number = 5;

    render(<ItemCounter name="Item Counter test" quantity={quanity} />);

    const [buttonSubstract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubstract);

    expect(screen.getByText("4")).toBeDefined();
  });

  test("should not decrease when -1 button button is clicked and quantity is 1", () => {
    const quanity: number = 1;
    render(<ItemCounter name="Item Counter test" quantity={quanity} />);

    const [buttonSubstract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubstract);

    expect(screen.getByText("1")).toBeDefined();
  });

  test("should change to red color when counter is 1", () => {
    const quanity: number = 1;
    const name: string = "Test Item Couner";
    render(<ItemCounter name={name} quantity={quanity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe("red");
  });

  test("should change to black color when counter is greater than 1", () => {
    const quanity: number = 2;
    const name: string = "Test Item Couner";
    render(<ItemCounter name={name} quantity={quanity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe("black");
  });
});
