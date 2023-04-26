import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import RandomNumber from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RandomNumber />
  </StrictMode>
);
