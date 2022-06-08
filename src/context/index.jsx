import { createContext, useEffect, useState, useContext } from "react";
import { useSpotifyPlayer } from "react-spotify-web-playback-sdk";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomDevice, atomToken } from "../store/atoms";
import spotifyMethods from "../utils/spotifyMethods";

export const XpotifyContext = createContext({});
export const getNewToken = () => spotifyMethods.refreshToken();

export const XpotifyProvider = ({ children }) => {
  const player = useSpotifyPlayer();

  // local: states
  const [newToken, setNewToken] = useState("");

  // recoil: states
  const [token, setToken] = useRecoilState(atomToken);
  const userDevice = useRecoilValue(atomDevice);

  // constants
  const TOKEN_IN_8_MIN = 480000;

  const refreshTokenValue = () => {
    getNewToken().then((newToken) => setNewToken(`Bearer ${newToken}`));
  };

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
      {children}
    </XpotifyContext.Provider>
  );
};

export const useXpotifyContext = () => useContext(XpotifyContext);
