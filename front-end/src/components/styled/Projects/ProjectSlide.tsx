import { ProjectHouseType } from "@/constants/projectHouses";
import { ComponentRef, useEffect, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import Button from "../Button";
const ProjectSlide = ({ img, description, title }: ProjectHouseType) => {
  const descriptionRef = useRef<ComponentRef<"p">>(null);
  const articleRef = useRef<ComponentRef<"article">>(null);
  function setDescriptionSize() {
    if (descriptionRef.current && articleRef.current) {
      descriptionRef.current.style.maxWidth =
        articleRef.current.clientWidth + "px";
    }
  }
  useEffect(() => {
    window.addEventListener("resize", setDescriptionSize);
    setDescriptionSize();
  }, []);
  return (
    <SwiperSlide className="flex  size-full text-white  bg-black">
      <div className="size-full">
        <div className="flex size-full">
          <img
            src={img}
            alt="project-house"
            className="size-full object-cover"
          />
        </div>
        <article
          className="absolute   w-full left-0 right-0 p-10 bottom-0 bg-black/40   text-white"
          data-scroll="out"
          fade-from="right"
          ref={articleRef}
        >
          <div className="flex  items-center w-full justify-between">
            <div className=" space-y-4 ">
              <h3 className="pr-20">{title}</h3>
              <p
                className=" overflow-hidden whitespace-nowrap text-ellipsis pr-16  text-2xl md:text-4xl"
                ref={descriptionRef}
              >
                {description}
              </p>
            </div>
            <div className="hidden md:block">
              <Button
                text="READ MORE"
                href=""
                className=" no-icon"
                fadeFrom="right"
              />
            </div>
          </div>
        </article>
      </div>
    </SwiperSlide>
  );
};

ProjectSlide.displayName = "SwiperSlide";

export default ProjectSlide;
