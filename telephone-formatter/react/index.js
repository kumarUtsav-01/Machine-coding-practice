import { createRoot } from "react-dom/client";
import App from "./src/App";

const root = document.getElementById("root");
const container = createRoot(root);
container.render(<App />);
