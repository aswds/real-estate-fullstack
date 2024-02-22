import styled from "styled-components";

const WrapperText = styled.h2.attrs((props) => {
  return {
    className: props.className,
    style: props.style,
  };
})``;

function SectionText(props: any) {
  return (
    <WrapperText
      className={`${props.className} text-2xl md:text-6xl md:max-w-[90%] lg:max-w-[80%]`}
      {...props}
    >
      {props.children}
    </WrapperText>
  );
}

export default SectionText;
