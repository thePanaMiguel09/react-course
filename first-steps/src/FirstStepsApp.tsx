import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {
    productName: "Play 5",
    quantity: 2,
  },
  {
    productName: "XBOX One",
    quantity: 3,
  },
  {
    productName: "Keyboard logitch",
    quantity: 1,
  },
  {
    productName: "Apple Ipords",
    quantity: 3,
  },
  {
    productName: "Samsung Smart TV",
    quantity: 4,
  },
];

export function FirstSetepsApp() {
  return (
    <div>
      <h1>Shopping Card</h1>
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </div>
  );
}
