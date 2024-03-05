import { IProject } from "@/constants/projects";
import Image from "./Image";
function Project({
  project,
  gridSize,
}: {
  project: IProject;
  gridSize: string;
}) {
  console.log(gridSize);
  return (
    <article
      className={`${gridSize}  overflow-hidden min-h-80`}
      data-scroll="out"
    >
      <a className={`flex size-full items-end zoom-image`}>
        <Image src={project.image} />

        <div className="w-full z-10">
          <p className=" font-normal  text-3xl p-5 bg-gradient-to-t from-[#000000af] to-transparent">
            {project.name}
          </p>
        </div>
      </a>
    </article>
  );
}

export default Project;
