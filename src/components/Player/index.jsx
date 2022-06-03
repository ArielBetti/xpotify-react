import { memo, useCallback, useState, useEffect } from "react";
import {
  WebPlaybackSDK,
  usePlaybackState,
  useSpotifyPlayer,
  usePlayerDevice,
} from "react-spotify-web-playback-sdk";
import { useProgressBarPosition } from "../../hooks/useProgressBarPosition";

const MySpotifyPlayer = () => {
  const PlaySong = () => {
    const playbackState = usePlaybackState();

    if (!playbackState) return null;

    return (
      <div>
        <img
          src={
            playbackState?.track_window?.current_track?.album?.images[0]?.url
          }
          alt=""
        />
        <p>{playbackState?.track_window?.current_track?.name}</p>
        <p>
          {playbackState?.track_window?.current_track?.artists
            ?.map((artist) => artist?.name)
            .toString()
            .replaceAll(",", ", ")}
        </p>
      </div>
    );
  };

  const ProgressBar = () => {
    const playbackState = usePlaybackState();
    const player = useSpotifyPlayer();
    const [currentPosition] = useProgressBarPosition({
      hasPaused: playbackState?.paused,
      duration: playbackState?.duration,
      position: playbackState?.position,
    });

    return (
      <div>
        <span>{(currentPosition / 60000).toFixed(2)}</span>
        <input
          type="range"
          value={currentPosition}
          onChange={(e) => player?.seek(e.target.value)}
          min="0"
          max={playbackState?.duration}
        />
        <span>{(playbackState?.duration / 60000).toFixed(2)}</span>
      </div>
    );
  };

  const PlayerControls = () => {
    const playbackState = usePlaybackState();
    const player = useSpotifyPlayer();

    console.log(playbackState);
    if (!player) return null;

    return (
      <div>
        {playbackState?.track_window?.previous_tracks.length > 0 && (
          <button onClick={() => player.previousTrack()}>Anterior</button>
        )}
        <button onClick={() => player.pause()}>Pausar</button>
        <button onClick={() => player.resume()}>Tocar</button>
        {playbackState?.track_window?.next_tracks.length > 0 && (
          <button onClick={() => player.nextTrack()}>Proximo</button>
        )}
      </div>
    );
  };

  return (
    <div>
      <ProgressBar />
      <PlaySong />
      <PlayerControls />
    </div>
  );
};

export default memo(MySpotifyPlayer);
