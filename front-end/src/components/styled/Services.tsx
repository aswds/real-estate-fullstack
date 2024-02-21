import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import ServiceButton from "./ServiceButton";
import House from "@assets/houses/hero-house.jpg";
import House1 from "@assets/houses/project-house0.jpg";
import House2 from "@assets/houses/project-house1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // Initially first button active
  const [activeImage, setActiveImage] = useState();
  const handleMouseLeave = (event: MouseEvent) => {
    if (!containerRef.current?.contains(event.relatedTarget as Node)) {
      setActiveIndex(0); // Reset to first button on leave
    }
  };

  useEffect(() => {}, []);

  const handleButtonHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section
        className="hidden md:flex size-full gap-6 mt-28   p-4 "
        data-scroll="out"
      >
        <div className="w-1/3 xl:pr-20">
          <div className="relative pb-[123%]">
            {[House, House1, House2].map((houseUrl, index) => (
              <div
                className={`absolute top-0 left-0 h-full w-full transition-all duration-1000 delay-300 [.active~&]:opacity-0 [&.active]:opacity-100 ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <div className="h-full overflow-hidden ">
                  <img
                    src={houseUrl}
                    className={`attachment-full size-full loaded`}
                    alt=""
                    data-h-pos=""
                    data-v-pos=""
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Container
          display="flex"
          className="flex-col  w-2/3 max-h-full  "
          alignItems="flex-start"
          ref={containerRef}
          justifyContent="flex-start"
          onMouseLeave={handleMouseLeave}
        >
          <ServiceButton
            title="Build"
            isActive={activeIndex === 0}
            onMouseEnter={() => handleButtonHover(0)}
          >
            Setting the standard for master planning work for real estate
            development and redevelopment projects around the world.
          </ServiceButton>
          <ServiceButton
            title="Expertise"
            isActive={activeIndex === 1}
            onMouseEnter={() => handleButtonHover(1)}
          >
            Our seasoned team excels in market analysis, precise property
            valuation, and effective negotiation.
          </ServiceButton>
          <ServiceButton
            title="Rent"
            isActive={activeIndex === 2}
            onMouseEnter={() => handleButtonHover(2)}
          >
            Discover a range of carefully curated rental properties tailored to
            your needs.
          </ServiceButton>
          <ServiceButton
            title="Lease"
            onMouseEnter={() => handleButtonHover(3)}
            isActive={activeIndex === 3}
          >
            Explore our curated selection of available properties for lease,
            including residential homes and commercial spaces.
          </ServiceButton>
        </Container>
      </section>
      <section className="block md:hidden  pt-10 pb-16 w-full z-50">
        <Swiper pagination modules={[Pagination]} autoHeight>
          {[House, House1, House2].map((houseUrl, index) => (
            <SwiperSlide key={index}>
              <div>
                <img
                  src={houseUrl}
                  className={`size-full `}
                  alt=""
                  data-h-pos=""
                  data-v-pos=""
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <div>HELLO WORLD</div>
            </SwiperSlide>
          ))}
          <div className="relative p-5">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </section>
    </>
  );
}

export default Services;
