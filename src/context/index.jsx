import { createContext, useEffect, useState, useContext } from "react";
import {
  usePlayerDevice,
  useSpotifyPlayer,
} from "react-spotify-web-playback-sdk";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { atomDevice, atomToken, atomUser } from "../store/atoms";
import spotifyMethods from "../utils/spotifyMethods";
import MySpotifyPlayer from "../components/Player";

export const XpotifyContext = createContext({});
export const getNewToken = () => spotifyMethods.refreshToken();

export const XpotifyProvider = ({ children }) => {
  // device
  const device = usePlayerDevice();

  const player = useSpotifyPlayer();

  // local: states
  const [newToken, setNewToken] = useState("");

  // recoil: states
  const user = useRecoilValue(atomUser);
  const [token, setToken] = useRecoilState(atomToken);
  const setUserDevice = useSetRecoilState(atomDevice);

  // constants
  const TOKEN_IN_8_MIN = 480000;

  const refreshTokenValue = () => {
    getNewToken().then((newToken) => setNewToken(`Bearer ${newToken}`));
  };

  useEffect(() => {
    if (newToken && btoa(newToken)) {
      setToken(newToken);
    }
  }, [newToken, setToken]);

  useEffect(() => {
    setInterval(() => refreshTokenValue(), TOKEN_IN_8_MIN);
  }, [token]);

  useEffect(() => {
    if (device?.status === "ready" && user) {
      setUserDevice(device);
      player.connect();
    }
  }, [device, player, setUserDevice, user]);

  return (
    <XpotifyContext.Provider value={{ refreshTokenValue }}>
      {children}
      <MySpotifyPlayer />
    </XpotifyContext.Provider>
  );
};

export const useXpotifyContext = () => useContext(XpotifyContext);
