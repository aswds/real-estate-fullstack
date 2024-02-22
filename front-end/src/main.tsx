import { GlobalStyles } from "@components/styled/GlobalStyles.tsx";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.scss";
import { router } from "./router/index.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);
