import { projectHouses } from "@/constants/projectHouses";
import ProjectHouse0 from "@assets/houses/project-house0.jpg";
import Button from "@components/styled/Button";
import ProjectSlide from "@components/styled/Projects/ProjectSlide";
import SectionTitle from "@components/styled/Section/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
function Projects() {
  return (
    <div className="page overflow-hidden py-10 text-black  bg-white">
      <div className="projects-container">
        <div className="w-full md:w-1/3 " data-scroll="out" fade-from="left">
          <SectionTitle>EXPERIENCE WE HAVE</SectionTitle>
          <h1 className="mb-10">LATEST PROJECTS</h1>
          <div className="hidden md:flex">
            <Button text="Projects" href="" />
          </div>
        </div>

        <div
          className="relative w-full  md:w-2/3"
          data-scroll="out"
          fade-from="right"
        >
          <Swiper>
            {projectHouses.map((houseData) => {
              return (
                <SwiperSlide>
                  <ProjectSlide {...houseData} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex self-start md:hidden">
          <Button
            text="Projects"
            href=""
            className="white-bg"
            fadeFrom="right"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
