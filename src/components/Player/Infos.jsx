import { useRef } from "react";

import { usePlaybackState } from "react-spotify-web-playback-sdk";

// atoms: components
import * as Atom from "./style";

// ::
const PlayerInfos = () => {
  const playbackState = usePlaybackState();

  // references
  const refTrackName = useRef(null);
  const refTrackArtists = useRef(null);

  if (!playbackState) return null;

  return (
    <Atom.PlayerInfosContainer>
      <Atom.PlayerInfoAlbumArt
        src={playbackState?.track_window?.current_track?.album?.images[0]?.url}
        alt="Foto do album"
      />
      <Atom.PlayerInfoTextContainer>
        <Atom.PlayerInfoTrackName
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
          {playbackState?.track_window?.current_track?.artists
            ?.map((artist) => artist?.name)
            .toString()
            .replaceAll(",", ", ")}
        </Atom.PlayerInfoTrackArtists>
      </Atom.PlayerInfoTextContainer>
    </Atom.PlayerInfosContainer>
  );
};

export default PlayerInfos;
