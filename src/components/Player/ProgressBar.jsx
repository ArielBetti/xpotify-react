import {
  usePlaybackState,
  useSpotifyPlayer,
} from "react-spotify-web-playback-sdk";
import { useProgressBarPosition } from "../../hooks/useProgressBarPosition";

// atoms: components
import * as Atom from "./style";

// ::
const PlayerProgressBar = () => {
  const playbackState = usePlaybackState();
  const player = useSpotifyPlayer();
  const [currentPosition] = useProgressBarPosition({
    hasPaused: playbackState?.paused,
    duration: playbackState?.duration,
    position: playbackState?.position,
  });

  if (!playbackState?.duration) return null;

  // * Progress bar calculation
  let positionRef = Number(
    ((currentPosition / playbackState?.duration) * 100).toFixed(1)
  );
  let percentage = positionRef / 100;

  return (
    <Atom.PlayerProgressBar>
      <Atom.PlayerProgressBarSliderContainer>
        <Atom.PlayerProgressBarTimer>
          {(currentPosition / 60000).toFixed(2)}
        </Atom.PlayerProgressBarTimer>
        <Atom.PlayerProgressBarSlider
          type="range"
          value={currentPosition}
          onClick={() => player.resume()}
          onChange={(e) => player?.seek(e.target.value)}
          min="0"
          max={playbackState?.duration}
          progressBarSize={percentage.toFixed(2).replace("0.", "0") || "0"}
        />
        <Atom.PlayerProgressBarTimer>
          {(playbackState?.duration / 60000).toFixed(2)}
        </Atom.PlayerProgressBarTimer>
      </Atom.PlayerProgressBarSliderContainer>
    </Atom.PlayerProgressBar>
  );
};

export default PlayerProgressBar;
