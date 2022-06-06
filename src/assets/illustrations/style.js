import styled from "styled-components";

export const SvgContainer = styled.svg`
  height: 500px;
  @media (max-width: ${(props) => props.theme?.breakpoints.lg}) {
    height: 350px;
  }
  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    height: 300px;
  }
  @media (max-width: ${(props) => props.theme?.breakpoints.xsm}) {
    height: 180px;
  }
`;
