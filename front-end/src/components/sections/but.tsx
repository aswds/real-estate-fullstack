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

const ServiceButtonContainer = styled.a<
  ComponentProps<"div"> & ServiceButtonProps
>`
  cursor: pointer;
  align-items: flex-start;
  transition: all 1s ease-in-out;

  .description {
    height: 0;
    transition: height 0.5s ease-in-out;
    overflow: hidden;
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
      className={` flex-col ${isActive ? "active" : ""} `}
      onMouseEnter={onMouseEnter}
    >
      <button className={"title text-7xl border-white h-full"}>{title}</button>
      <div className="description h-full">
        <Text className={"text-2xl h-full"}>{children}</Text>
      </div>
    </ServiceButtonContainer>
  );
});
export default ServiceButton;
