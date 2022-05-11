import styled from "styled-components";

export const AppBaseUI = styled.div`
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  -webkit-font-smoothing: antialiased !important;
  background-color: ${(props) => props.theme?.colors?.background};
  transition: background-color ${(props) => props.theme?.transitions[1]};
`;
