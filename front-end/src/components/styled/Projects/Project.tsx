import { ProjectHouseType } from "@/constants/projectHouses";

function Project({ city, img, state }: ProjectHouseType) {
  return (
    <>
      <div className="house-image-container">
        <div className="overflow-hidden image-wrapper">
          <img src={img} alt="project-house" className="house-image" />
        </div>
        <div className="house-info">
          <div>
            <h4>{city}</h4>
            <h3 className="font-light">{state}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
