import { services, servicesText } from "@/constants/services";
import { useRef, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceButton from "./ServiceButton";
function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // Initially first button active
  const handleMouseLeave = (event: MouseEvent) => {
    if (!containerRef.current?.contains(event.relatedTarget! as Node)) {
      setActiveIndex(0); // Reset to first button on leave
    }
  };
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
            {services.map((service, index) => (
              <div
                className={`absolute top-0 left-0 h-full w-full transition-all duration-1000 delay-300 z-0 [.active~&]:opacity-0 [&.active]:opacity-100 ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <div className="h-full overflow-hidden ">
                  <img
                    src={service.img}
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
        <div
          className="flex flex-col  w-2/3 max-h-full items-start justify-start "
          ref={containerRef}
          //@ts-ignore
          onMouseLeave={handleMouseLeave}
        >
          {services.map((service, index) => {
            return (
              <ServiceButton
                title={service.title}
                isActive={activeIndex === index}
                key={index}
                onMouseEnter={() => handleButtonHover(index)}
              >
                {service.description}
              </ServiceButton>
            );
          })}
        </div>
      </section>
      <section className="block md:hidden  pt-10 pb-16 w-full  max-h-[50%]">
        <Swiper pagination modules={[Pagination]} autoHeight>
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div>
                <img
                  src={service.img}
                  className={`size-full `}
                  alt=""
                  data-h-pos=""
                  data-v-pos=""
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 mt-4">
                <h2>{service.title}</h2>
                <div className="">{service.description}</div>
              </div>
            </SwiperSlide>
          ))}
          <div className="relative p-5 ">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </section>
    </>
  );
}

export default Services;
