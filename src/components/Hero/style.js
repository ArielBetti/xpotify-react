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

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 200px;
  max-width: 200px;
  border-radius: 50%;
`;
