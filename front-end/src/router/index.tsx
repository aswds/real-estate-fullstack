import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "@components/Navbar";

function NavbarParent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <NavbarParent />,
    children: [
      {
        path: "/",

        element: <App />,
      },
    ],
  },
]);
