import AboutUs from "@components/sections/AboutUs";
import Projects from "@components/sections/Projects";
import ServiceOffers from "@components/sections/ServiceOffers";

import ContactUs from "@components/sections/ContactUs";
import Hero from "@components/sections/Hero";
function Home() {
  return (
    <div className="translate-y-[-var(nav-height)]">
      <Hero />
      <AboutUs />

      <div className="m-auto page">
        <ServiceOffers />
      </div>
      <Projects />

      <ContactUs />
    </div>
  );
}

export default Home;
