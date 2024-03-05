import { MdOutlineArrowForward } from "react-icons/md";
function Service({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-black">
      <div className="group/title flex flex-row justify-between items-center cursor-pointer">
        <h3
          className={`group-hover/title  animataion-link-left-to-right !text-black before:!bg-black`}
        >
          {title}
        </h3>
        <MdOutlineArrowForward
          size={60}
          className="group-hover/title:translate-x-3 transition-transform duration-500"
        />
      </div>
      <p className="mt-6">{description}</p>
    </div>
  );
}

export default Service;
