import { usePlayerDevice } from "react-spotify-web-playback-sdk";
import { selector, selectorFamily } from "recoil";

// requester
import { requester } from "../services/requester";

// atoms
import { atomGlobalSearch, atomRefreshToken, atomToken } from "./atoms";

// atoms: hash
import { atomHashGlobalSearch, atomHashRefreshToken } from "./atomsHash";

// constants
import {
  CONSTANT_QUERY_ARTIST_TRACKS,
  CONSTANT_QUERY_GET_ALL,
} from "./constants";

export const selectorGetToken = selector({
  key: "GetToken",
  get: async ({ get }) => {
    const token = get(atomToken);
    return token;
  },
});

export const selectorRefreshToken = selector({
  key: "SelectRefreshToken",
  get: async ({ get }) => {
    const refresh = get(atomRefreshToken);
    return refresh;
  },
});

export const selectorGetUser = selector({
  key: "GetUser",
  get: async ({ get }) => {
    const token = get(selectorGetToken);
    if (!token) return null;

    const { data } = await requester({
      Authorization: token,
    }).get("/me");

    return data;
  },
});

export const selectorGetSearchList = selector({
  key: "GetSearch",
  get: async ({ get }) => {
    const search = get(atomGlobalSearch);
    const token = get(selectorGetToken);
    get(atomHashGlobalSearch);

    if (!search) return null;

    const { data } = await requester({
      Authorization: token,
    }).get(`/search?q=${search}${CONSTANT_QUERY_GET_ALL}`);

    return data;
  },
});

export const selectorGetArtistTracks = selectorFamily({
  key: "GetArtistTracks",
  get:
    (id) =>
    async ({ get }) => {
      const token = get(selectorGetToken);

      if (!id) return null;

      const { data } = await requester({
        Authorization: token,
      }).get(`/artists/${id}/${CONSTANT_QUERY_ARTIST_TRACKS}`);

      return data;
    },
});

export const selectorGetArtist = selectorFamily({
  key: "GetArtist",
  get:
    (id) =>
    async ({ get }) => {
      const token = get(selectorGetToken);

      if (!id) return null;

      const { data } = await requester({
        Authorization: token,
      }).get(`/artists/${id}`);

      return data;
    },
});

export const selectorGetArtistAlbums = selectorFamily({
  key: "GetArtistAlbums",
  get:
    (id) =>
    async ({ get }) => {
      const token = get(selectorGetToken);

      if (!id) return null;

      const { data } = await requester({
        Authorization: token,
      }).get(`/artists/${id}/albums`);

      return data;
    },
});

export const selectorGetRefreshToken = selector({
  key: "GetRefreshToken",
  get: async ({ get }) => {
    get(atomHashRefreshToken);
    const { data } = await requester({
      baseURL: "http://localhost:8080",
    }).get(`/api/refresh_token?refresh_token=${get(selectorRefreshToken)}`);

    return data;
  },
});

export const selectorSetSoundTrack = selectorFamily({
  key: "SetSoundTrack",
  get:
    (trackUri) =>
    async ({ get }) => {
      const token = get(selectorGetToken);
      const device = usePlayerDevice();

      if (device === null || !trackUri) return null;

      const { data } = await requester({
        Authorization: token,
      }).put(
        `me/player/play?device_id=${device?.device_id}`,
        JSON.stringify({ uris: [trackUri] })
      );

      return data;
    },
});
