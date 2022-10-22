import { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { SpotifyPlaybackPlayer } from "react-spotify-playback-player";
import {
  usePlaybackState,
  usePlayerDevice,
  useSpotifyPlayer,
} from "react-spotify-web-playback-sdk";
import { useRecoilValue } from "recoil";
import { useTheme } from "styled-components";
import { atomUser } from "../../store/atoms";

// ::
const MySpotifyPlayer = () => {
  const navigate = useNavigate();
  const hasUser = useRecoilValue(atomUser);
  const device = usePlayerDevice();
  const playBack = usePlaybackState();
  const player = useSpotifyPlayer();
  const theme = useTheme();

  const onLinkClick = (event) => {
    const isArtist = event.uri.includes(":artist:");
    const isAlbum = event.uri.includes(":album:");

    if (isArtist) {
      navigate(`/artista/${event.link}`);
    }
    if (isAlbum) {
      navigate(`/album/${event.link}`);
    }
  };

  const playerTheme = useMemo(
    () => ({
      backgroundColor: theme.colors.neutral.pure,
      disabledColor: theme.colors.neutral?.[2],
      highLightColor: theme.colors.contrast,
      popOverColor: theme.colors.neutral.zero,
      primaryTextColor: theme.colors.text.contrast,
      secondaryBackgroundColor: theme.colors.neutral?.[3],
      secondaryTextColor: theme?.colors.text.contrast,
    }),
    [theme]
  );

  if (!hasUser) return null;

  return (
    <SpotifyPlaybackPlayer
      playback={playBack}
      deviceIsReady={device?.status}
      player={player}
      theme={playerTheme}
      onLinkClick={onLinkClick}
    />
  );
};

export default memo(MySpotifyPlayer);
