import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => `${props.theme.colors?.neutral.pure}b2`};
  position: fixed;
  left: 0;
  top: 0;
`;

export const Loader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Disclaimer = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  font-size: 1em;
  text-align: center;
`;
