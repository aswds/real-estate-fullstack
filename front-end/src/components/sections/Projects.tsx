import { projectHouses } from "@/constants/projectHouses";
import Button from "@components/styled/Button";
import ProjectSlide from "@components/styled/Projects/ProjectSlide";
import { EffectCreative, Keyboard, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
function Projects() {
  return (
    <div className="projects-container page gap-10 text-black" id="projects">
      <div className="w-full" data-scroll="out" fade-from="left">
        <h3>FEATURED PROJECTS</h3>
      </div>

      <section className="flex w-full h-full">
        <Swiper
          navigation
          modules={[Keyboard, EffectCreative, Navigation]}
          grabCursor={true}
          effect={"creative"}
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
