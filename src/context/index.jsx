import { createContext, useEffect, useState, useContext } from "react";
import { useRecoilState } from "recoil";
import { atomToken } from "../store/atoms";
import spotifyMethods from "../utils/spotifyMethods";

export const XpotifyContext = createContext({});
export const getNewToken = () => spotifyMethods.refreshToken();

export const XpotifyProvider = ({ children }) => {
  const [token, setToken] = useRecoilState(atomToken);
  const [newToken, setNewToken] = useState("");

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

  return (
    <XpotifyContext.Provider value={{ refreshTokenValue }}>
      {children}
    </XpotifyContext.Provider>
  );
};

export const useXpotifyContext = () => useContext(XpotifyContext);
