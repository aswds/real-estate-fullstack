import { MdArrowOutward } from "react-icons/md";
function Button(props: {
  text: string;
  href: string;
  fadeFrom?: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={`action-button ${props.className}`}
      data-scroll="out"
      fade-from={props.fadeFrom}
    >
      <h3 className="text-3xl whitespace-nowrap mr-10 " id="button-text">
        {props.text}
      </h3>
      <MdArrowOutward size={30} className="icon" />
    </div>
  );
}

export default Button;
