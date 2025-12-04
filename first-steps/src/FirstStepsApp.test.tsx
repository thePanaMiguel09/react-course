import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FirstSetepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));
// vi.mock("./shopping-cart/ItemCounter", () => ({
//   ItemCounter: (props: unknown) => (
//     <div
//       data-testid="ItemCounter"
//       name={props.name}
//       quantity={props.quantity}
//     />
//   ),
// }));

describe("FirstStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = render(<FirstSetepsApp />);

    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstSetepsApp />);

    const divItemsCounter = screen.getAllByTestId("ItemCounter");

    expect(divItemsCounter.length).toBe(5);
  });

  test("should render ItemCounter with correct props", () => {
    render(<FirstSetepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(5);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Play 5",
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "XBOX One",
      quantity: 3,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Keyboard logitch",
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Apple Ipords",
      quantity: 3,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Samsung Smart TV",
      quantity: 4,
    });
  });
});
