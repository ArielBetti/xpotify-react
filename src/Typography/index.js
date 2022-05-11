import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2em;
  color: ${(props) => props.theme?.colors.text.contrast};
  transition: color ${(props) => props.theme?.transitions[2]};
`;

export const SubTitle = styled.h3`
  font-size: 1.5em;
  color: ${(props) => props.theme?.colors.text.contrast};
  transition: color ${(props) => props.theme?.transitions[2]};
`;

export const ParagraphLarge = styled.span`
  font-size: 1.35em;
  color: ${(props) => props.theme?.colors.text.contrast};
  transition: color ${(props) => props.theme?.transitions[2]};
`;

export const ParagraphBold = styled.span`
  font-size: 1.2em;
  color: ${(props) => props.theme?.colors.text.contrast};
  transition: color ${(props) => props.theme?.transitions[2]};
`;

export const Paragraph = styled.span`
  font-size: 1em;
  color: ${(props) => props.theme?.colors.text.contrast};
  transition: color ${(props) => props.theme?.transitions[2]};
`;

export const SmallText = styled.span`
  font-size: 0.8em;
  color: ${(props) => props.theme?.colors.text.contrast};
  transition: color ${(props) => props.theme?.transitions[2]};
`;
