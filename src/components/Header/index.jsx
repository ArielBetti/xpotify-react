import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useTheme } from "styled-components";

// hooks
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

// components
import ToggleTheme from "../ToggleTheme";
import UserDropdown from "./UserDropdown";
import HambuguerMenu from "./HamburguerMenu";
import { Container } from "../Container";

// atoms: components
import * as Atom from "./style";
import { atomUser } from "../../store/atoms";
import Logo from "../../assets/Logo";

// ::
const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // local: states
  const [scrollValue, setScrollValue] = useState(0);
  const [menuToggle, setMenuToggle] = useState();

  // recoil: states
  const user = useRecoilValue(atomUser);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  useEffect(() => {
    if (user && width > theme?.breakpoints?.md.replace("px", "")) {
      setMenuToggle(false);
    }
  }, [width]);

  return (
    <Atom.NavigationContainer>
      <Atom.NavigationItems
        hasHamburguerOpen={menuToggle}
        setBackground={scrollValue > 10}
      >
        <Container>
          <Atom.NavigationExtends>
            <Atom.NavLogo onClick={() => navigate("/home")}>
              <Logo />
              Xpotify
            </Atom.NavLogo>
            <Atom.UserSection>
              {user && width > theme?.breakpoints?.md.replace("px", "") && (
                <UserDropdown />
              )}
              <ToggleTheme />
              {user && width <= theme?.breakpoints?.md.replace("px", "") && (
                <HambuguerMenu
                  menuToggle={menuToggle}
                  setMenuToggle={setMenuToggle}
                />
              )}
            </Atom.UserSection>
          </Atom.NavigationExtends>
        </Container>
      </Atom.NavigationItems>
    </Atom.NavigationContainer>
  );
};

export default memo(Header);
