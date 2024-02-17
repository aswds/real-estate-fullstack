import Text from "@components/styled/Text";
import Container from "./Container";
import { Header } from "./Header";
import styled, { keyframes } from "styled-components";
import { ComponentProps, RefObject, forwardRef, useState } from "react";

interface ServiceButtonProps extends React.PropsWithChildren {
  title: string;
  ref?: RefObject<{}>;
  onMouseEnter?: Function;
  isActive: boolean;
}

const ServiceButtonContainer = styled.a<ComponentProps<"div">>`
  cursor: pointer;
  align-items: flex-start;
  transition: all 0.5s ease-in-out;
  .description {
    height: 0;
    opacity: 0;
    transition: all 1s ease-in-out;
    transition-delay: 0.3s;

    overflow: hidden;
  }

  .title {
    transition: all 0.5s ease-in-out;
    transition-delay: 0.3s;
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
      height: 100px;
    }
  }
`;

const ServiceButton = forwardRef(function ServiceButton(
  { children, title, onMouseEnter, isActive }: ServiceButtonProps,
  ref
) {
  return (
    <ServiceButtonContainer
      as={Container}
      display="flex"
      className={` flex-col ${isActive ? "active" : ""} gap-4`}
      onMouseEnter={onMouseEnter}
    >
      <button
        className={`  title text-6xl  ${
          isActive ? "translate-y-0" : "translate-y-4"
        }`}
      >
        {title}
      </button>
      <div className={`  description  text-2xl`}>
        <Text
          className={`text-2xl transition-transform duration-1000 ${
            isActive ? "translate-y-0" : "translate-y-4"
          }`}
        >
          {children}
        </Text>
      </div>
    </ServiceButtonContainer>
  );
});
export default ServiceButton;
