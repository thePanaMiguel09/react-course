import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);

    const h1 = container.querySelector("h1");
    const h2 = container.querySelector('h2');

    console.log(h1?.innerHTML);
    console.log(h2?.innerHTML);

    expect(h1?.innerHTML).toContain("Miguel");
    expect(h2?.innerHTML).toContain("Chávez")
  });

  test('should render firstName and lastName using screen debuging', () => {
    render(<MyAwesomeApp />);
    screen.debug();

    const firsName = screen.getByTestId('first-name-title');

    expect(firsName.innerHTML).toContain('Miguel');

  })
});
