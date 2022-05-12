import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;

  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
  @media (max-width: ${(props) => props.theme?.breakpoints.md}) {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2px;
    gap: 10px;
    width: 100%;
  }
`;
