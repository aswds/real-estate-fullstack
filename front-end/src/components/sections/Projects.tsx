import { projectHouses } from "@/constants/projectHouses";
import Button from "@components/styled/Button";
import ProjectSlide from "@components/styled/Projects/ProjectSlide";
import { EffectCreative, Keyboard, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
function Projects() {
  return (
    <div
      className="projects-container page !pb-10 gap-10 text-black"
      id="home-page-projects"
    >
      <div className="w-full " data-scroll="out">
        <h3>FEATURED PROJECTS</h3>
      </div>

      <Swiper
        navigation
        modules={[Keyboard, EffectCreative, Navigation]}
        grabCursor={true}
        effect={"creative"}
        className="size-full"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
      >
        {projectHouses.map((houseData, index) => {
          return <ProjectSlide {...houseData} key={index} />;
        })}
      </Swiper>
      <Button text="See All Projects" href="/projects" className="white-bg" />
    </div>
  );
}

export default Projects;
