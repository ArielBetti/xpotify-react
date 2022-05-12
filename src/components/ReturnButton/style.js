import styled from "styled-components";
import { Paragraph } from "../../Typography";

export const ReturnButtonContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 30px;
  background-color: ${(props) => props.theme?.colors?.contrast};
  border-radius: 100px;
  padding: 5px;
  cursor: pointer;
  transition: ${(props) => props.theme?.transitions[1]};
  :hover {
    box-shadow: ${(props) => `${props.theme?.colors?.contrast}4A`} 0px 3px,
      ${(props) => `${props.theme?.colors?.contrast}33`} 0px 5px,
      ${(props) => `${props.theme?.colors?.contrast}26`} 0px 10px;
  transform: translateY(-5px);
  }
`;
