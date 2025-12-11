import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
  const { count, handleAddCount, handleSubstractCount, handleResetCount } =
    useCounter();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Counter Value</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: 5,
        }}
      >
        <button onClick={handleSubstractCount}>-1</button>
        <p>{count}</p>
        <button onClick={handleAddCount}>+1</button>
      </div>
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <button onClick={handleResetCount}>Reset</button>
      </div>
    </div>
  );
};
