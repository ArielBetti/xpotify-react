import styled from "styled-components";
import { Paragraph, SubTitle } from "../../Typography";

export const NavLogo = styled(SubTitle)`
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  left: 0;
  top: 0;
  align-items: center;
  width: 100%;
  padding-top: 35px;
  padding-bottom: 10px;
  margin-bottom: 35px;
  z-index: 2;
  position: relative;
`;

export const NavigationItems = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  padding: 10px 0px;
  background-color: ${(props) =>
    props.setBackground || props?.hasHamburguerOpen
      ? props.theme?.colors?.neutral.pure
      : "transparent"};
  box-shadow: ${(props) =>
    props.setBackground || props?.hasHamburguerOpen
      ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
      : "none"};
  transition: background-color ${(props) => props.theme?.transitions[1]};
`;

export const NavigationExtends = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  left: 0;
`;

export const UserDropDownAnchor = styled.div`
  position: relative;
`;

export const UserDropDownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 200px;
  border-left: 2px solid ${(props) => props.theme.colors.contrast};
  transition: linear 0.25s background-color;
  padding: 5px;
  flex-wrap: nowrap;
  cursor: pointer;
  background-color: ${(props) =>
    props?.hasOpen ? props?.theme?.colors?.neutral[2] : "transparent"};
  :hover {
    background-color: ${(props) => props?.theme?.colors?.neutral[2]};
  }

  .dropdown-arrow {
    transition: 0.45s transform ease;
    transform: ${(props) => (props?.hasOpen ? "rotate(180deg)" : "none")};
  }
`;

export const UserDropDownUserName = styled(Paragraph)`
  max-width: 120px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UserDropDownCollapse = styled.div`
  position: absolute;
  visibility: ${(props) => (props?.hasOpen ? "visible" : "hidden")};
  transition: 0.45s all ease;
  opacity: ${(props) => (props?.hasOpen ? 1 : 0)};
  transition-property: background-color, opacity, height;
  top: ${(props) => (props?.hasOpen ? "100%" : "0px")};
  left: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: ${(props) => (props?.hasOpen ? "100%" : "0%")};
  margin-right: 10px;
  border: ${(props) => (props?.hasOpen ? "1px" : "0px")} solid
    ${(props) => props.theme.colors.neutral[2]};
  border-left: ${(props) => (props?.hasOpen ? "2px" : "0px")} solid
    ${(props) => props.theme.colors.contrast};
  border-top: none;
  overflow: hidden;
  background-color: ${(props) => props?.theme?.colors?.neutral[1]};
  cursor: default;
  height: ${(props) => (props?.hasOpen ? "auto" : "0px")}; ;
`;

export const UserDropDownItem = styled.div`
  width: 100%;
  transition: linear 0.25s background-color;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 10px;
  cursor: pointer;
  gap: 10px;

  :hover {
    background-color: ${(props) => props?.theme?.colors?.neutral[3]};
  }
`;

export const UserProfilePic = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100%;
`;

export const UserSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const HamburguerMenuToggle = styled.div`
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

export const HamburguerMenuCollapse = styled.div`
  transition: ease 0.25s all;
  visibility: ${(props) => (props?.hasOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props?.hasOpen ? 1 : 0)};
  position: fixed;
  top: 60px;
  right: 0;
  height: 100%;
  background-color: ${(props) => props?.theme?.colors?.neutral?.pure};
  min-width: ${(props) => (props?.hasOpen ? "50%" : "0%")};
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  border-top: 2px solid ${(props) => props.theme.colors.contrast};
`;

export const HamburguerUserSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 15px 10px;
`;

export const HamburguerMenuItem = styled.div`
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 10px;
  cursor: pointer;
  gap: 10px;

  :hover {
    background-color: ${(props) => props?.theme?.colors?.neutral[3]};
  }
`;
