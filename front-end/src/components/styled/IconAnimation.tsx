import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0%{bottom: 5%}
    25% {bottom: 10%}
    50% {bottom: 5%}
    100%{bottom: 5%}
`;

const Wrapper = styled.div`
  animation-name: ${animation};
  animation-duration: 10s;
  position: absolute;
  bottom: 10%;
  animation-iteration-count: infinite;
`;

function IconAnimation(props: React.PropsWithChildren) {
  return <Wrapper>{props.children}</Wrapper>;
}

export { IconAnimation };
