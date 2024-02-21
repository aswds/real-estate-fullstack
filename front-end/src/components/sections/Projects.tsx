import { projectHouses } from "@/constants/projectHouses";
import Button from "@components/styled/Button";
import Project from "@components/styled/Projects/Project";
import ProjectSlide from "@components/styled/Projects/ProjectSlide";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
function Projects() {
  return (
    <div className="projects-container page gap-10 text-black" id="projects">
      <div className="w-full " data-scroll="out" fade-from="left">
        <h3>OUR LATEST PROJECTS</h3>
      </div>

      <div className=" w-full h-full hidden md:block " fade-from="right">
        {projectHouses.map((houseData) => {
          return <Project {...houseData} />;
        })}
      </div>
      <section className="flex w-full md:hidden">
        <Swiper pagination modules={[Pagination, Keyboard, Navigation]}>
          {projectHouses.map((houseData, index) => {
            return <ProjectSlide {...houseData} key={index} />;
          })}
          <div className="relative p-5">
            <div className="swiper-pagination "></div>
          </div>
        </Swiper>
      </section>
      <div className="flex">
        <Button
          text="See All Projects"
          href=""
          className="white-bg"
          fadeFrom="right"
        />
      </div>
    </div>
  );
}

export default Projects;
