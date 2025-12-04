import { useState } from "react";

import "./ItemCounter.css"
// import styles from "./ItemCounter.module.css";

interface ItemCounterProps {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: ItemCounterProps) => {
  const [itemCount, setItemCount] = useState<number>(quantity);

  const handlePlusItem = () => {
    setItemCount(itemCount + 1);
  };

  const handleLessItem = () => {
    if (itemCount === 1) return;
    setItemCount(itemCount - 1);
  };

  return (
    <section
    //   style={{
    //     display: "flex",
    //     alignItems: "center",
    //     gap: 10,
    //     marginTop: 10,
    //   }}
        className={"item-row"}
    >
      <span
        className="item-text"
        style={{
          color: itemCount === 1 ? "red": "black"
        }}
      >
        {name}
      </span>

      <button onClick={handleLessItem}>-1</button>
      <span>{itemCount}</span>
      <button onClick={handlePlusItem}>+1</button>
    </section>
  );
};
