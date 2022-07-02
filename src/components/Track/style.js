import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { Paragraph, SmallText } from "../../Typography";

export const TrackCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme?.colors?.neutral[1]};
  padding: 10px;
  width: 100%;
  max-width: 320px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  @media (max-width: ${(props) => props.theme?.breakpoints.md}) {
    max-width: 100%;
    justify-content: flex-start;
    align-items: center;
  }
  :hover {
    .button-play {
      visibility: initial;
    }
  }
`;

export const TrackCardTogglePlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  visibility: ${(props) => (props.hasCurrent ? "visible" : "hidden")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const TrackCardImage = styled(LazyLoadImage)`
  width: 60px;
  height: 60px;
`;

export const TrackCardInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TrackCardName = styled(Paragraph)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  max-width: 200px;
  @media (max-width: ${(props) => props.theme?.breakpoints.xsm}) {
    max-width: 80px;
  }
`;

export const TrackCardArtists = styled(SmallText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  max-width: 200px;
  @media (max-width: ${(props) => props.theme?.breakpoints.xsm}) {
    max-width: 80px;
  }
`;

export const TrackCardImageContainer = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  position: relative;
`;
