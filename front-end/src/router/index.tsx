import ScrollToTop from "@/utils/ScrollToTop";
import Navbar from "@components/Navbar";
import Footer from "@components/sections/Footer";
import AboutUs from "@pages/AboutUs";
import Contact from "@pages/Contact";
import Home from "@pages/Home";
import Projects from "@pages/Projects";
import Services from "@pages/Services";
import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";

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
