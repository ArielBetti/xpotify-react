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
  background-color: ${(props) => props.setBackground ? props.theme?.colors?.neutral.pure : "transparent"};
  box-shadow: ${(props) => props.setBackground ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" : "none"};
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
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-width: 200px;
  max-width: 220px;
  /* background-color: ${(props) => props.theme.colors.neutral[3]}; */
  margin-right: 10px;
  border-left: 2px solid ${(props) => props.theme.colors.contrast};
  padding-left: 5px;
  flex-wrap: nowrap;
`;

export const UserProfilePic = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  margin-right: 10px;
`;

export const UserSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
