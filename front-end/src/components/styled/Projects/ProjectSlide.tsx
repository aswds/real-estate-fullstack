import React from "react";
import Button from "../Button";
import { ProjectHouseType } from "@/constants/projectHouses";

function ProjectSlide({ city, img, state }: ProjectHouseType) {
  return (
    <div className="house-image-container">
      <div className="dark-layer ">
        <img src={img} alt="project-house" className="object-contain" />
      </div>
      <div className="house-info">
        <div>
          <h4>{city}</h4>
          <h3 className="font-light">{state}</h3>
        </div>

        <Button text="READ MORE" href="" className="no-icon" />
      </div>
    </div>
  );
}

export default ProjectSlide;
