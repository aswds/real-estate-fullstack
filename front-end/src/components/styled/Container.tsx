import React, { ComponentProps, HTMLAttributes, forwardRef } from "react";
import styled, { css } from "styled-components";

interface ContainerProps {
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderRadius?: string;
  display?: "flex" | "grid"; // Existing layout options
  justifyContent?: string; // Existing flex props
  alignItems?: string; // Existing flex props
  gridTemplateColumns?: string; // Existing grid props
  gridTemplateRows?: string; // Existing grid props
  children: React.ReactNode;
  className?: string; // Added className prop
}

const StyledContainer = styled.div<ContainerProps & ComponentProps<"section">>`
  padding: ${(props) => props.padding || "0em"};
  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) =>
    props.backgroundColor || props.theme?.colors?.background || ""};
  border-radius: ${(props) => props.borderRadius || "0px"};
  display: ${(props) => props.display || "flex"};

  // Existing flexbox and grid styles
  // Flexbox styles (applied when display is set to 'flex')
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "center"};

  // Grid styles (applied when display is set to 'grid')
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  grid-template-rows: ${(props) => props.gridTemplateRows};
  /* Additional styling applied when className prop is present */
`;

const Container: React.FC<ContainerProps> = forwardRef(
  ({ children, ...props }, ref) => (
    <StyledContainer {...props} ref={ref}>
      {children}
    </StyledContainer>
  )
);

export default Container;
