import styled from "styled-components";
import { SubTitle } from "../../Typography";

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
    props.setBackground ? props.theme?.colors?.neutral.pure : "transparent"};
  box-shadow: ${(props) =>
    props.setBackground ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" : "none"};
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

export const UserDropDownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 200px;
  margin-right: 10px;
  border-left: 2px solid ${(props) => props.theme.colors.contrast};
  transition: linear 0.2s background-color;
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

export const UserDropDownCollapse = styled.div`
  position: absolute;
  transition: 0.45s all ease;
  opacity: ${(props) => (props?.hasOpen ? 1 : 0)};
  transition-property: background-color, width, opacity;
  top: ${(props) => (props?.hasOpen ? "55px" : "0px")};
  background-color: red;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: ${(props) => (props?.hasOpen ? "208px" : "0px")};
  margin-right: 10px;
  border-left: ${(props) => (props?.hasOpen ? "2px" : "0px")} solid
    ${(props) => props.theme.colors.contrast};
  overflow: hidden;
  background-color: ${(props) => props?.theme?.colors?.neutral[1]};
  cursor: default;
`;

export const UserDropDownItem = styled.div`
  width: 100%;
  transition: linear 0, 3 background-color;
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
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
