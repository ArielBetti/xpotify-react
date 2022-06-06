import {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";
import {
  useSpotifyPlayer,
  usePlaybackState,
} from "react-spotify-web-playback-sdk";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomDevice, atomToken } from "../store/atoms";
import spotifyMethods from "../utils/spotifyMethods";

export const XpotifyContext = createContext({});
export const getNewToken = () => spotifyMethods.refreshToken();

export const XpotifyProvider = ({ children }) => {
  const player = useSpotifyPlayer();
  const playbackState = usePlaybackState();

  // local: states
  const [newToken, setNewToken] = useState("");

  const [token, setToken] = useRecoilState(atomToken);
  const userDevice = useRecoilValue(atomDevice);

  // constants
  const TOKEN_IN_8_MIN = 480000;

  const refreshTokenValue = () => {
    getNewToken().then((newToken) => setNewToken(`Bearer ${newToken}`));
  };

  const getOAuthToken = useCallback(
    (callback) => callback(token?.replace("Bearer", "").trim()),
    [token]
  );

  useEffect(() => {
    if (newToken && btoa(newToken)) {
      setToken(newToken);
    }
  }, [newToken]);

  useEffect(() => {
    setInterval(() => refreshTokenValue(), TOKEN_IN_8_MIN);
  }, [token]);

  useEffect(() => {
    if (userDevice?.status === "ready") {
      player.connect();
    }
  }, [userDevice]);

  return (
    <XpotifyContext.Provider value={{ refreshTokenValue }}>
      {playbackState ? (
        <WebPlaybackSDK
          initialDeviceName="Xpotify Web"
          getOAuthToken={getOAuthToken}
          volume={0.5}
          connectOnInitialized={true}
        >
          {children}
        </WebPlaybackSDK>
      ) : (
        <>{children}</>
      )}
    </XpotifyContext.Provider>
  );
};

export const useXpotifyContext = () => useContext(XpotifyContext);
