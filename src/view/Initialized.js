import { useMemo, memo } from "react";
import { useRecoilValue } from "recoil";
import { atomDarkTheme } from "../store/atoms";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../theme";
import AppRouter from "../routes";

// components
import { Container } from "../components/Container";

// atoms: components
import * as Atom from "./style";

// context
import { XpotifyProvider } from "../context";

// ::
const Initialized = () => {
  // recoil: state
  const prefersDarkMode = useRecoilValue(atomDarkTheme);

  // theme changer
  const theme = useMemo(
    () => (prefersDarkMode ? dark : light),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Atom.GlobalStyle />
      <XpotifyProvider>
        <Atom.AppBaseUI>
          <Container>
            <AppRouter />
          </Container>
        </Atom.AppBaseUI>
      </XpotifyProvider>
    </ThemeProvider>
  );
};

export default memo(Initialized);
