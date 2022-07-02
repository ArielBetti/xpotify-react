import { memo } from "react";
import { MdPlayArrow, MdPause } from "react-icons/md";
import {
  usePlaybackState,
  useSpotifyPlayer,
} from "react-spotify-web-playback-sdk";
import { useRecoilValue } from "recoil";
import { useTheme } from "styled-components";

// atoms: recoil
import { atomCurrentTrack } from "../../store/atoms";

// atoms: components
import * as Atom from "./style";

const Track = ({ track, handleChangeTrack, trackArt }) => {
  const theme = useTheme();
  const player = useSpotifyPlayer();
  const playbackState = usePlaybackState();

  // recoil: states
  const currentTrack = useRecoilValue(atomCurrentTrack) || "";

  const onChangeTrack = (trackUri) => {
    if (currentTrack === track?.uri && playbackState?.paused) {
      return player.resume();
    }
    if (currentTrack === track?.uri && !playbackState?.paused) {
      return player.pause();
    }

    handleChangeTrack(trackUri);
  };

  return (
    <Atom.TrackCard onDoubleClick={() => handleChangeTrack(track?.uri)}>
      <Atom.TrackCardImageContainer>
        <Atom.TrackCardTogglePlayContainer
          hasCurrent={currentTrack === track?.uri}
          onClick={() => onChangeTrack(track?.uri)}
          className="button-play"
        >
          {currentTrack === track?.uri && !playbackState?.paused ? (
            <MdPause size="40px" color={theme?.colors?.contrast} />
          ) : (
            <MdPlayArrow size="40px" color={theme?.colors?.contrast} />
          )}
        </Atom.TrackCardTogglePlayContainer>
        <Atom.TrackCardImage
          effect="blur"
          src={track?.album?.images[0 || 1 || 2].url || trackArt}
          alt="Album art"
        />
      </Atom.TrackCardImageContainer>
      <Atom.TrackCardInfosContainer>
        <Atom.TrackCardName>{track?.name}</Atom.TrackCardName>
        <Atom.TrackCardArtists>
          {track?.artists
            ?.map((artist) => artist?.name)
            .toString()
            .replaceAll(",", ", ")}
        </Atom.TrackCardArtists>
      </Atom.TrackCardInfosContainer>
    </Atom.TrackCard>
  );
};

export default memo(Track);
