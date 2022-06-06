import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => `${props.theme.colors?.neutral.zero}4D`};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
`;

export const Loader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Disclaimer = styled.span`
  color: ${(props) => props.theme?.colors?.text?.contrast};
  font-weight: bold;
  font-size: 1em;
  text-align: center;
`;
