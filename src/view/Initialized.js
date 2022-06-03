import { useMemo, memo, useCallback } from "react";
import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";
import { useRecoilValue } from "recoil";
import { atomDarkTheme, atomToken } from "../store/atoms";
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
  const token = useRecoilValue(atomToken);

  const getOAuthToken = useCallback(
    (callback) => callback(token.replace("Bearer", "").trim()),
    []
  );

  // theme changer
  const theme = useMemo(
    () => (prefersDarkMode ? dark : light),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Atom.GlobalStyle />
      <WebPlaybackSDK
        initialDeviceName="Xpotify Web"
        getOAuthToken={getOAuthToken}
        volume={0.5}
        connectOnInitialized={true}
      >
        <XpotifyProvider>
          <Atom.AppBaseUI>
            <Container>
              <AppRouter />
            </Container>
          </Atom.AppBaseUI>
        </XpotifyProvider>
      </WebPlaybackSDK>
    </ThemeProvider>
  );
};

export default memo(Initialized);
