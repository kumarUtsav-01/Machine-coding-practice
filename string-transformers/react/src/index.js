import { createRoot } from "react-dom/client";
import App from "./components/app/App";

const root = document.querySelector("#root");
const container = createRoot(root);
container.render(<App />);
