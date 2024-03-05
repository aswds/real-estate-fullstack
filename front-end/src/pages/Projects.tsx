import { projects } from "@/constants/projects";
import { dataScrollInHandle } from "@/js/dataScrollIn";
import Button from "@components/styled/Button";
import Project from "@components/styled/Project";
import { useEffect, useState } from "react";
import "./Projects.scss";
function Projects() {
  const [page, setPage] = useState<number>(1);
  const projectsToShow = projects.slice(0, page * 5);
  function projectGridSize(
    projectResolution: "tall" | "small" | "wide-tall" | "wide"
  ) {
    switch (projectResolution) {
      case "tall":
        return "md:row-span-2";
      case "small":
        return;
      case "wide-tall":
        return "md:row-span-2 md:col-span-2";
      case "wide":
        return "md:row-span-2 md:col-span-1";
    }
  }
  useEffect(() => {
    dataScrollInHandle();
  }, [projectsToShow]);
  return (
    <div className="" id="projects">
      <section
        className={`bg-image object-center bg-center page !pt-[var(--nav-height)] flex flex-col max-h-min gap-10 size-full`}
      >
        <h1 className="mt-36">PROJECTS</h1>
        <p className="page-subtitle   md:max-w-[60%] ">
          Explore our portfolio and witness the embodiment of luxury,
          innovation, and quality.
        </p>
      </section>
      <section className="flex flex-col bg-white page ">
        <div className="grid grid-cols-1 md:auto-rows-[minmax(15.5rem,auto)]   lg:grid-cols-4 sm:grid-cols-2  md:grid-flow-row-dense sm:gap-5 gap-10">
          {projectsToShow.map((project) => {
            const gridSize = projectGridSize(project.resolution);
            return <Project gridSize={gridSize || ""} project={project} />;
          })}
        </div>
        <Button
          text={`LOAD MORE`}
          onClick={() => {
            setPage((pageNumber) => pageNumber + 1);
          }}
          className={`${projectsToShow.length === projects.length ? "!hidden" : "flex"} white-bg no-icon mt-10 self-center`}
        />
      </section>
    </div>
  );
}

export default Projects;
