import { useTheme } from "styled-components";
import {
  usePlaybackState,
  useSpotifyPlayer,
} from "react-spotify-web-playback-sdk";
import {
  MdPlayArrow,
  MdPause,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

// atoms: components
import * as Atom from "./style";

// ::
const PlayerControls = () => {
  const theme = useTheme();

  const playbackState = usePlaybackState();
  const player = useSpotifyPlayer();

  if (!player) return null;

  return (
    <Atom.PlayerControlsContainer>
      {playbackState?.track_window?.previous_tracks.length > 0 ? (
        <Atom.PlayerButton onClick={() => player.previousTrack()}>
          <MdSkipPrevious size="30px" color={theme?.colors?.contrast} />
        </Atom.PlayerButton>
      ) : (
        <Atom.PlayerButton hasDisabled onClick={(e) => e.preventDefault()}>
          <MdSkipPrevious size="30px" color={theme?.colors?.neutral[2]} />
        </Atom.PlayerButton>
      )}
      {!playbackState?.paused ? (
        <Atom.PlayerButton
          hasDisabled={!playbackState?.duration}
          onClick={(e) =>
            playbackState?.duration ? player.pause() : e.preventDefault()
          }
        >
          <MdPause
            size="30px"
            color={
              playbackState?.duration
                ? theme?.colors?.contrast
                : theme?.colors?.neutral[2]
            }
          />
        </Atom.PlayerButton>
      ) : (
        <Atom.PlayerButton
          hasDisabled={!playbackState?.duration}
          onClick={(e) =>
            playbackState?.duration ? player.resume() : e.preventDefault()
          }
        >
          <MdPlayArrow
            size="30px"
            color={
              playbackState?.duration
                ? theme?.colors?.contrast
                : theme?.colors?.neutral[2]
            }
          />
        </Atom.PlayerButton>
      )}
      {playbackState?.track_window?.next_tracks.length > 0 ? (
        <Atom.PlayerButton onClick={() => player.nextTrack()}>
          <MdSkipNext size="30px" color={theme?.colors?.contrast} />
        </Atom.PlayerButton>
      ) : (
        <Atom.PlayerButton onClick={(e) => e.preventDefault()} hasDisabled>
          <MdSkipNext size="30px" color={theme?.colors?.neutral[2]} />
        </Atom.PlayerButton>
      )}
    </Atom.PlayerControlsContainer>
  );
};

export default PlayerControls;
