import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2px;
    gap: 10px;
  }
`;
