import { atom } from "recoil";

// storage: localStorage
import { localStorageEffect } from "../utils/localStorageEffect";

export const atomDevice = atom({
  key: "Device",
  default: undefined,
});

export const atomToken = atom({
  key: "Token",
  default: undefined,
  effects: [localStorageEffect("bearer")],
});

export const atomRefreshToken = atom({
  key: "RefreshToken",
  default: undefined,
  effects: [localStorageEffect("refresh")],
});

export const atomUser = atom({
  key: "User",
  default: undefined,
  effects: [localStorageEffect("current_user")],
});

export const atomTracks = atom({
  key: "Tracks",
  default: undefined,
});

export const atomPlaylists = atom({
  key: "Playlists",
  default: undefined,
});

export const atomCurrentTrack = atom({
  key: "CurrentTrack",
  default: undefined,
});

export const atomCurrentTrackId = atom({
  key: "CurrentTrackId",
  default: undefined,
});

export const atomTrackList = atom({
  key: "TrackList",
  default: [],
});

export const atomArtist = atom({
  key: "Artists",
  default: undefined,
});

export const atomAlbums = atom({
  key: "Albums",
  default: undefined,
});

export const atomGlobalSearch = atom({
  key: "GlobalSearch",
  default: undefined,
});

export const atomDarkTheme = atom({
  key: "DarkTheme",
  default: true,
  effects: [localStorageEffect("dark_mode")],
});

export const atomUserDisbladAlert = atom({
  key: "UserDisbladAlert",
  default: true,
  effects: [localStorageEffect("user_disabled")],
});
