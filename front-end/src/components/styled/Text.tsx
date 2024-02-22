import styled from "styled-components";

const WrapperText = styled.h3.attrs((props) => {
  return {
    className: props.className,
    style: props.style,
  };
})``;

function Text(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <WrapperText className={props.className} {...props}>
      {props.children}
    </WrapperText>
  );
}

export default Text;
