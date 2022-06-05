import { atom } from "recoil";

export const atomHashTracks = atom({
  key: "HashTracks",
  default: 0,
});

export const atomHashRefreshToken = atom({
  key: "HashRefreshToken",
  default: 0,
});

export const atomHashArtist = atom({
  key: "HashArtist",
  default: 0,
});

export const atomHashAlbums = atom({
  key: "HashAlbums",
  default: 0,
});

export const atomHashGlobalSearch = atom({
  key: "HashGlobalSearch",
  default: 0,
});

export const atomHashTrackList = atom({
  key: "HasTrackList",
  default: 0,
})
