import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "montserrat";
    ::-webkit-scrollbar-track {
	    background-color: ${(props) => `${props.theme?.colors?.neutral[2]}E6`};
	    border-radius: 10px;
    }
    ::-webkit-scrollbar {
	    width: 3px;
	    background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 15px;
      background-color: ${(props) => props.theme?.colors.contrast};
    }
  }
`;

export const AppBaseUI = styled.div`
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  outline: 0;
  padding-bottom: 120px;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  -webkit-font-smoothing: antialiased !important;
  background-color: ${(props) => props.theme?.colors?.background};
  transition: background-color ${(props) => props.theme?.transitions[1]};
  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    padding-bottom: 200px;
  }
`;
