import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstSetepsApp } from "./FirstStepsApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirstSetepsApp />
  </StrictMode>
);
