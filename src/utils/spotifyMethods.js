import axios from "axios";

export default {
  user: async () => {
    let res;
    try {
      res = await axios.get("https://api.spotify.com/v1/me", getConfig());
    } catch (error) {
      if (error.response.status === 401) refreshToken();
    }
    return (res || {}).data;
  },
  play: async (device, track, position, usepreview, preview) => {
    const data = {
      uris: [`spotify:track:${track.id}`],
      position_ms: position || 0,
    };
    // let preview
    // preview shared the hole time
    if (!preview) preview = new Audio(track.preview_url);
    try {
      if (!usepreview)
        await axios.put(
          `https://api.spotify.com/v1/me/player/play?device_id=${device}`,
          data,
          getConfig()
        );
      else {
        // preview = new Audio(track.preview_url);
        preview.src = track.preview_url;
        preview.play();
      }
    } catch (error) {
      if (error.response.status === 401) refreshToken();
    }
    return preview;
  },
  recommendations: async (seed, market, genre, popularity) => {
    let res;
    try {
      res = await axios.get(
        `https://api.spotify.com/v1/recommendations?limit=35&market=${market}${
          seed ? `&seed_tracks=${seed}` : ""
        }${genre ? `&seed_genres=${genre}` : ""}&min_popularity=${
          popularity || 50
        }`,
        getConfig()
      );
    } catch (error) {
      if (error.response.status === 401) refreshToken();
    }
    return (res || {}).data;
  },
  tracks: async (g) => {
    let res;
    let range = ["long_term", "medium_term", "short_term"];
    let r = range[Math.floor(Math.random() * 3)];
    try {
      if (!g)
        res = await axios.get(
          `https://api.spotify.com/v1/me/top/tracks?time_range=${r}&limit=50`,
          getConfig()
        );
      if (g || !res.data.items[0])
        res = await axios.get(
          `https://api.spotify.com/v1/recommendations?limit=50&seed_genres=${
            g || "pop"
          }&min_popularity=10`,
          getConfig()
        );
    } catch (error) {
      if (error.response.status === 401) refreshToken();
    }
    return (res || {}).data;
  },
  genres: async () => {
    let res;
    try {
      res = await axios.get(
        `https://api.spotify.com/v1/recommendations/available-genre-seeds`,
        getConfig()
      );
    } catch (error) {
      if (error.response.status === 401) refreshToken();
    }
    return (res || {}).data;
  },
  options: async (run, index) => {
    let res;
    try {
      let options = await axios.get(
        `/api/challengeoptions/${run.user._id}/${index}`
      );
      res = await axios.get(
        `https://api.spotify.com/v1/tracks?ids=${options.data.tracks.toString()}`,
        getConfig()
      );
      res.data.song = options.data.song;
    } catch (error) {
      if (error.response.status === 401) refreshToken();
    }
    return (res || {}).data;
  },
  checksaved: async (tracks) => {
    let res;
    try {
      res = await axios.get(
        `https://api.spotify.com/v1/me/tracks/contains?ids=${tracks.toString()}`,
        getConfig()
      );
    } catch (error) {
      if (error.response.status === 401) refreshToken();
    }
    return (res || {}).data;
  },
  save: async (track) => {
    let res;
    try {
      res = await axios.put(
        `https://api.spotify.com/v1/me/tracks?ids=${track}`,
        {},
        getConfig()
      );
    } catch (error) {
      if (error.response.status === 401) refreshToken();
    }
    return (res || {}).data;
  },
  remove: async (track) => {
    let res;
    try {
      res = await axios.delete(
        `https://api.spotify.com/v1/me/tracks?ids=${track}`,
        getConfig()
      );
    } catch (error) {
      if (error.response.status === 401) refreshToken();
    }
    return (res || {}).data;
  },
  refreshToken: refreshToken,
};

function getConfig() {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.access_token}`,
    },
  };
}

async function refreshToken() {
  let res;
  try {
    res = await axios.get(
      `http://localhost:8080/api/refresh_token?refresh_token=${localStorage.refresh_token}`
    );
  } catch (error) {
    delete window.localStorage.access_token;
  }
  window.localStorage.access_token = res.data.access_token;
  return res.data.access_token;
}
