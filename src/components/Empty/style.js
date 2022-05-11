import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 100%;
  margin: 50px 0;
`;

export const EmptySvg = styled.img`
  height: 500px;

  @media (max-width: ${(props) => props.theme?.breakpoints.lg}) {
    height: 350px;
  }
  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    height: 300px;
  }
`;
