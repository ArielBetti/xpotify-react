import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useTheme } from "styled-components";

// icons
import { BsSoundwave } from "react-icons/bs";

// components
import ToggleTheme from "../ToggleTheme";
import UserDropdown from "./UserDropdown";
import { Container } from "../Container";

// atoms: components
import * as Atom from "./style";
import { atomUser } from "../../store/atoms";
import { usePlaybackState } from "react-spotify-web-playback-sdk";

// ::
const Header = () => {
  // recoil: states
  const user = useRecoilValue(atomUser);

  const [scrollValue, setScrollValue] = useState(0);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  return (
    <Atom.NavigationContainer>
      <Atom.NavigationItems setBackground={scrollValue > 10}>
        <Container>
          <Atom.NavigationExtends>
            <Atom.NavLogo onClick={() => navigate("/home")}>
              <BsSoundwave color={theme?.colors?.contrast} size="30px" />
              Xpotify
            </Atom.NavLogo>
            <Atom.UserSection>
              {user && <UserDropdown />}
              <ToggleTheme />
            </Atom.UserSection>
          </Atom.NavigationExtends>
        </Container>
      </Atom.NavigationItems>
    </Atom.NavigationContainer>
  );
};

export default memo(Header);
