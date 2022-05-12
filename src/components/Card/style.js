import styled from "styled-components";
import { ParagraphBold } from "../../Typography";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme?.colors?.neutral[1]};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  gap: 20px;
  width: 100%;
  max-width: 200px;
  border-radius: 4px;
  transition: ${(props) => props.theme?.transitions[1]};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin: ${(props) => props.marginGap || "0"};
  border: 2px solid transparent;
  max-height: 250px;
  cursor: ${(props) => (props.hasAction ? "pointer" : "default")};

  :hover {
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.4);
    transform: translateY(-5px);
    border: 2px solid ${(props) => props.theme?.colors?.contrast};
  }

  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
    margin: 0px;
  }
`;

export const CardImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    align-items: flex-start;
    width: auto;
  }
`;

export const CardImage = styled.img`
  border-radius: ${(props) => (props.type === "artist" ? "100%" : "4px")};
  width: 8em;
  height: 8em;
`;

export const CardTitle = styled(ParagraphBold)`
  width: 180px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`;
