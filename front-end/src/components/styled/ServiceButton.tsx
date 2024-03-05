import {
  ComponentProps,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import Container from "./Container";

interface ServiceButtonProps extends React.PropsWithChildren {
  title: string;
  onMouseEnter: Function;
  isActive: boolean;
}

const ServiceButtonContainer = styled.a<ComponentProps<"div">>`
  cursor: pointer;
  align-items: flex-start;
  transition: all 0.5s ease-in-out;

  .description {
    opacity: 0;
    transition: all 1s ease-in-out;
    overflow: hidden;
    /* Added max-height to prevent unexpected behavior */
    max-height: 0;
  }

  .title {
    transition: all 0.5s ease-in-out;
  }

  .title:not(.active) {
    opacity: 0.5;
  }

  &.active {
    .title {
      opacity: 1;
    }

    .description {
      opacity: 1;
      /* Adjust the max-height based on your needs */
      max-height: 500px; // Replace with a suitable value
    }
  }
`;

function ServiceButton({
  children,
  title,
  onMouseEnter,
  isActive,
}: ServiceButtonProps) {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  function handleResize() {
    if (descriptionRef.current) {
      const newHeight = descriptionRef.current.scrollHeight;
      console.log(title);

      console.log(newHeight);
      setHeight(newHeight);
    }
  }
  useLayoutEffect(() => {
    setTimeout(() => {
      handleResize();
    }, 100); // Adjust the delay if needed

    // ... other useEffect logic
  }, [children]);
  useEffect(() => {
    // Calculate height on initial render and whenever content changes

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [children]);

  function handleMouseEnter() {
    if (descriptionRef.current) {
      descriptionRef.current.style.height = `${height}px`;
    }
    onMouseEnter();
  }

  return (
    <ServiceButtonContainer
      as={Container}
      display="flex"
      className={`flex-col ${isActive ? "active" : ""} gap-4`}
      onMouseEnter={handleMouseEnter}
    >
      {/* ${isActive ? "translate-y-0" : "translate-y-4"} */}
      <button
        className={`title text-6xl md:text-7xl max-md:text-9xl 2xl:text-8xl 
        `}
      >
        {title}
      </button>
      <div
        className={`relative description `}
        style={{ height: isActive ? height + "px" : 0 }}
        ref={descriptionRef}
      >
        <p
          className={`text-2xl md:text-4xl xl:text-5xl  transition-transform duration-500 `}
        >
          {children}
        </p>
      </div>
    </ServiceButtonContainer>
  );
}

export default ServiceButton;
