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
import ContactUs from "@components/sections/ContactUs";
import Footer from "@components/sections/Footer";
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
      <AboutUs />

      <div className="m-auto page">
        <ServiceOffers />
      </div>
      <Projects />

      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
