import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { Title } from "../../Typography";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 30px;

  @media (max-width: ${(props) => props.theme?.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2px;
    width: 100%;
  }
`;

export const TitleWrapper = styled(Title)`
  border-bottom: 2px solid ${(props) => props.theme?.colors?.contrast};
  padding: 10px;
`;

export const HeroImgWrapper = styled.div`
  position: relative;
`;

export const HeroImg = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  height: 200px;
  width: 200px;
  border-radius: 100%;
`;

export const HeroTogglePlayButton = styled.div`
  position: absolute;
  background: ${(props) => props?.theme?.colors?.contrast};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  visibility: "visible";
  left: 10px;
  top: 10px;
  z-index: 1;
`;
