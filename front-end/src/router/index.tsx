import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";
import App from "../App";
import Footer from "@components/sections/Footer";
import AboutUs from "@pages/AboutUs";
import Navbar from "@components/Navbar";
import ScrollToTop from "@/utils/ScrollToTop";
import Services from "@pages/Services";
import Projects from "@pages/Projects";
import Home from "@pages/Home";
import Contact from "@pages/Contact";

function MainLayout() {
  const location = useLocation();
  return (
    <div>
      <ScrollToTop />
      <nav className="fixed w-screen z-50 ">
        <Navbar />
      </nav>
      <div
        className={
          location.pathname === "/" || location.pathname === "/projects"
            ? ""
            : `pt-[var(--nav-height)]`
        }
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { element: <Projects />, path: "/projects" },
      { element: <Services />, path: "/services" },
      {
        element: <AboutUs />,
        path: "/about",
      },
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Contact />,
        path: "/contact",
      },
    ],
  },
]);
