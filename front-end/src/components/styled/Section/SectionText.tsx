import React from "react";
import styled from "styled-components";

const WrapperText = styled.h3.attrs((props) => {
  return {
    className: props.className,
    style: props.style,
  };
})``;

function SectionText(props) {
  return (
    <WrapperText
      className={`${props.className} text-xl md:text-5xl md:max-w-[90%]`}
      {...props}
    >
      {props.children}
    </WrapperText>
  );
}

export default SectionText;
