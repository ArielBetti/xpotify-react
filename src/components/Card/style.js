import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { ParagraphBold, SmallText } from "../../Typography";

export const CardTogglePlayButton = styled.div`
  position: absolute;
  background: ${(props) => props?.theme?.colors?.contrast};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  visibility: ${(props) => (props?.hasCurrent ? "visible" : "hidden")};
  left: 10px;
  top: 10px;

  @media (max-width: ${(props) => props.theme?.breakpoints.md}) {
    visibility: visible;
  }
`;

export const CardContainer = styled.div`
  position: relative;
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
    .button-play {
      visibility: initial;
    }
  }

  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    max-width: 100%;
    margin: 0px;
  }

  @media (max-width: ${(props) => props.theme?.breakpoints.xsm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardInfoContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: ${(props) => props.theme?.breakpoints.xsm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  @media (max-width: ${(props) => props.theme?.breakpoints.xsm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardImage = styled(LazyLoadImage)`
  border-radius: ${(props) => (props.type === "artist" ? "100%" : "4px")};
  width: 8em;
  height: 8em;
`;

export const CardTitle = styled(ParagraphBold)`
  width: 170px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 5px;
  @media (max-width: ${(props) => props.theme?.breakpoints.xsm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80px;
  }
`;

export const CardDescription = styled(SmallText)`
  width: 160px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: ${(props) => props.theme?.breakpoints.xsm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80px;
  }
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`;
