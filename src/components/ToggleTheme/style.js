import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 40px;
  border-radius: 5px;
  background-color: ${(props) => props.theme?.colors?.contrast};
  border: 1px solid ${(props) => props.theme.colors.contrast};
  cursor: pointer;
`;
