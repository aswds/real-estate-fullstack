import Text from "@components/styled/Text";
import { ComponentProps, useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    // Calculate height on initial render and whenever content changes
    if (descriptionRef.current) {
      const newHeight = descriptionRef.current.scrollHeight;
      setHeight(newHeight);
    }
  }, [children]);

  function handleMouseEnter() {
    if (descriptionRef.current) {
      descriptionRef.current.style.maxHeight = `${height}px`;
    }
    onMouseEnter?.();
  }

  return (
    <ServiceButtonContainer
      as={Container}
      display="flex"
      className={`flex-col ${isActive ? "active" : ""} gap-4`}
      onMouseEnter={handleMouseEnter}
    >
      <button
        className={`title text-6xl xl:text-6xl 2xl:text-8xl  ${
          isActive ? "translate-y-0" : "translate-y-4"
        }`}
      >
        {title}
      </button>
      <div
        className={`relative description text-2xl`}
        style={{ height: isActive ? height + "px" : 0 }}
        ref={descriptionRef}
      >
        <Text
          className={`text-2xl xl:text-4xl 2xl:text-5xl transition-transform duration-1000 ${
            isActive ? "translate-y-0" : "translate-y-4"
          }`}
        >
          {children}
        </Text>
      </div>
    </ServiceButtonContainer>
  );
}

export default ServiceButton;
