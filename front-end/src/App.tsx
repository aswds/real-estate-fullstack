import "./App.scss";

import { GlobalStyles } from "@components/styled/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from "react";
import { setBodyObserver } from "./utils/setBodyObserver";
function App() {
  useEffect(() => {
    setBodyObserver();
  }, []);
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
