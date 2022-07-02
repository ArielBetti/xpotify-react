/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

import { usePlaybackState } from "react-spotify-web-playback-sdk";

// atoms: components
import * as Atom from "./style";

// ::
const PlayerInfos = () => {
  const playbackState = usePlaybackState();
  const navigate = useNavigate();

  // local: states
  const [navigateToTrack, setNavigateToTrack] = useState("");
  const [navigateToArtist, setNavigateToArtist] = useState([]);

  // references
  const refTrackName = useRef(null);
  const refTrackArtists = useRef(null);

  useEffect(() => {
    if (playbackState?.track_window?.current_track?.artists.length > 0) {
      const artistNameList =
        playbackState?.track_window?.current_track?.artists?.map(
          (artist) => artist?.name
        );

      const artistList =
        playbackState?.track_window?.current_track?.artists?.map(
          (artist) => artist
        );

      const normalizeList = artistList?.map((artist, index) => ({
        name: `${
          index + 1 === artistNameList.length
            ? artistNameList[index]
            : `${artistNameList[index]}, `
        }`,
        uri: artist?.uri?.replace("spotify:artist:", ""),
      }));

      setNavigateToArtist(normalizeList);
    }
    if (playbackState?.track_window?.current_track?.album) {
      const albumUri = playbackState?.track_window?.current_track?.album?.uri;
      setNavigateToTrack(albumUri.replace("spotify:album:", ""));
    }
  }, [
    playbackState?.track_window?.current_track?.album,
    playbackState?.track_window?.current_track?.artists,
  ]);

  if (!playbackState) return null;

  return (
    <Atom.PlayerInfosContainer>
      <Atom.PlayerInfoAlbumArt
        effect="blur"
        src={playbackState?.track_window?.current_track?.album?.images[0]?.url}
        alt="Foto do album"
      />
      <Atom.PlayerInfoTextContainer>
        <Atom.PlayerInfoTrackName
          onClick={() => navigate(`/album/${navigateToTrack}`)}
          trackNameWidth={refTrackName.current?.scrollWidth}
          trackNameTextLength={refTrackName.current?.innerText.length}
          ref={refTrackName}
        >
          {playbackState?.track_window?.current_track?.name}
        </Atom.PlayerInfoTrackName>
        <Atom.PlayerInfoTrackArtists
          trackArtistWidth={refTrackArtists.current?.scrollWidth}
          trackArtistTextLength={refTrackArtists.current?.innerText.length}
          ref={refTrackArtists}
        >
          {navigateToArtist?.map((artist) => (
            <span
              role="button"
              tabIndex="0"
              key={artist?.uri}
              onClick={() => navigate(`/artista/${artist?.uri}`)}
            >
              {artist?.name}
            </span>
          ))}
        </Atom.PlayerInfoTrackArtists>
      </Atom.PlayerInfoTextContainer>
    </Atom.PlayerInfosContainer>
  );
};

export default PlayerInfos;
