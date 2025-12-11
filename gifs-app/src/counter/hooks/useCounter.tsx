import { useState } from "react";


export const useCounter = (initialValue: number =1) => {
  const [count, setCount] = useState<number>(initialValue);

  const handleAddCount = () => {
    setCount(count + 1);
  };

  const handleSubstractCount = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  };

  const handleResetCount = () => {
    if (count === 0) return;
    setCount(0);
  };

  return {
    count,
    handleAddCount,
    handleSubstractCount,
    handleResetCount,
  };
};
