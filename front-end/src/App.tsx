import AboutUs from "@components/sections/AboutUs";
import ServiceOffers from "@components/sections/ServiceOffers";
import "./App.scss";
import Hero from "./components/sections/Hero";
import Projects from "@components/sections/Projects";
import Navbar from "@components/Navbar";
import { useEffect } from "react";
import { setBodyObserver } from "./utils/setBodyObserver";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
function App() {
  useEffect(() => {
    setBodyObserver();
  }, []);
  return (
    <>
      <nav className="fixed w-screen z-50 ">
        <Navbar />
      </nav>
      <Hero />
      <div className="m-auto page">
        <AboutUs />
        <ServiceOffers />
      </div>

      <Projects />
    </>
  );
}

export default App;
