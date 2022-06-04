import styled from "styled-components";
import { Paragraph, SmallText } from "../../Typography";
import { Container } from "../Container";

export const PlayerControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const PlayerButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  cursor: ${(props) => (props?.hasDisabled ? "initial" : "pointer")};
`;

export const PlayerProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PlayerProgressBarSliderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const PlayerProgressBarTimer = styled(SmallText)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 35px;
`;

export const PlayerProgressBarSlider = styled.input`
  -webkit-appearance: none;
  transition: linear 0.5s background-size;
  appearance: none;
  width: 100%;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  height: 5px;
  border-radius: 5px;
  background-color: ${(props) => props?.theme?.colors?.neutral[2]};
  outline: none;
  background-image: ${(props) =>
    `linear-gradient(${props.theme?.colors?.contrast}, ${props.theme?.colors?.contrast})`};
  background-size: ${(props) => `${props?.progressBarSize}%`};
  background-repeat: no-repeat;
  position: relative;
  :hover {
    opacity: 0.9;
    ::-webkit-slider-thumb {
      background-color: ${(props) => props?.theme?.colors?.contrast};
      border: 2px solid ${(props) => props?.theme?.colors?.text?.dark};
    }
  }
  ::-webkit-slider-thumb {
    appearance: none;
    width: 13px;
    height: 13px;
    position: absolute;
    background: transparent;
    border-radius: 10px;
    top: -4px;
    left: ${(props) => `${props?.progressBarSize - 1}%`};
    transition: linear 0.5s left;
    cursor: grabbing;
  }
  ::-webkit-fill-lower {
    background: blue;
  }
`;

export const PlayerInfosContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 250px;
  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    max-width: 90%;
  }
`;

export const PlayerInfoAlbumArt = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

export const PlayerInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    max-width: 90%;
  }
`;

export const PlayerInfoTrackName = styled(Paragraph)`
  transition: linear 2.5s transform;
  width: auto;
  :hover {
    ${(props) =>
      props.trackNameTextLength > 20 &&
      `
      transform: translateX(-${props.trackNameWidth - 180}px);
    `}
  }
`;

export const PlayerInfoTrackArtists = styled(SmallText)`
  transition: linear 2.5s transform;
  width: auto;
  :hover {
    ${(props) =>
      props.trackArtistTextLength > 20 &&
      `
      transform: translateX(-${props.trackArtistWidth - 180}px);
    `}
  }
`;

export const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: 10px 0px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  border-top: 1px solid ${(props) => props.theme?.colors?.neutral[1]};
  background: ${(props) => props.theme?.colors?.neutral.pure};
`;

export const PlayerSeekBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PlayerBarContainer = styled(Container)`
  flex-direction: row;
  gap: 10px;
  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    flex-direction: column;
  }
`;
