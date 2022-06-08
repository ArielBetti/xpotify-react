import styled from "styled-components";
import { ParagraphLarge } from "../../Typography";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props?.theme?.colors?.text?.contrast};
  gap: 10px;
  padding: 10px 20px;
  text-decoration: none;

  a {
    color: ${(props) => props?.theme?.colors?.text?.contrast};
  }
`;

export const LoginButton = styled.a`
  display: flex;
  transition: ease ${(props) => props.theme.transitions[2]} background-size;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid ${(props) => props?.theme?.colors?.contrast};
  text-decoration: none;
  cursor: pointer;
  background-image: ${(props) =>
    `linear-gradient(${props.theme?.colors?.contrast}, ${props.theme?.colors?.contrast})`};
  background-size: 0%;
  background-repeat: no-repeat;

  :hover {
    background-size: 100%;
    color: ${(props) => props.theme.colors?.text?.white};
  }
`;

export const LoginDisclaimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  line-height: 1.4em;
  max-width: 450px;
`;

export const LoginTitle = styled(ParagraphLarge)`
  margin-bottom: 20px;
`;

export const LoginExternalLink = styled.a`
  color: ${(props) => props?.theme?.colors?.contrast};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;
