import { Fragment, MouseEventHandler } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

function Button(props: {
  text: string;
  href?: string;
  fadeFrom?: "left" | "right";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const Element = props.href ? Link : "button";
  return (
    <Element
      to={props.href}
      className={`action-button ${props.className}`}
      data-scroll="out"
      fade-from={props.fadeFrom}
      onClick={props.onClick}
      aria-label={props.text}
    >
      <h3 className="text-3xl whitespace-nowrap mr-10 " id="button-text">
        {props.text}
      </h3>
      <MdArrowOutward size={30} className="icon" />
    </Element>
  );
}

export default Button;
