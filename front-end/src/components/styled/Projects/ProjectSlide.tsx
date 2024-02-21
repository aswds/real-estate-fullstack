import { ProjectHouseType } from "@/constants/projectHouses";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { GoLinkExternal } from "react-icons/go";
const ProjectSlide = ({ city, img, state }: ProjectHouseType) => {
  return (
    <SwiperSlide className=" text-white h-full bg-yellow-100">
      <div className=" size-full ">
        <img src={img} alt="project-house" className="size-full object-cover" />
      </div>
      <div>
        <div className="absolute flex flex-col items-center justify-center bottom-0  w-full p-10 size-full text-white  bg-black/40">
          <h4>{city}</h4>
          <h3 className="font-light">{state}</h3>
        </div>
        <GoLinkExternal />
      </div>
    </SwiperSlide>
  );
};

ProjectSlide.displayName = "SwiperSlide";

export default ProjectSlide;
