import { useEffect, memo } from "react";

import {
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
  useRecoilValueLoadable,
} from "recoil";
import {
  usePlaybackState,
  useSpotifyPlayer,
} from "react-spotify-web-playback-sdk";

import { useTheme } from "styled-components";

// atoms: components
import * as Atom from "./style";

// icons
import { MdPlayArrow, MdPause } from "react-icons/md";

// recoil: atoms
import { atomCurrentTrack, atomTrackList } from "../../store/atoms";
import { atomHashTrackList } from "../../store/atomsHash";

// typography
import * as Typography from "../../Typography";
import { selectorSetTrackCollection } from "../../store/selectors";
import Logo from "../../assets/Logo";

const Card = ({
  actionClick,
  image,
  title,
  description,
  ariaLabel,
  marginGap,
  type,
  collectionUri,
}) => {
  const theme = useTheme();
  const player = useSpotifyPlayer();
  const playbackState = usePlaybackState();

  // recoil: states
  const currentTrack = useRecoilValue(atomCurrentTrack) || "";
  const setCurrentTrack = useSetRecoilState(atomCurrentTrack);
  const [hashTrackList, setHashTrackList] = useRecoilState(atomHashTrackList);
  const [trackList, setTrackList] = useRecoilState(atomTrackList);

  // recoil: loadable
  const playCollectionTrackLoadable = useRecoilValueLoadable(
    selectorSetTrackCollection
  );

  const handleChangeTrack = (trackUri) => {
    setTrackList(trackUri);
    setHashTrackList(hashTrackList + 1);
  };

  const onChangeTrack = (trackUri) => {
    if (currentTrack === collectionUri && playbackState?.paused) {
      return player.resume();
    }
    if (currentTrack === collectionUri && !playbackState?.paused) {
      return player.pause();
    }

    handleChangeTrack(trackUri);
  };

  useEffect(() => {
    if (playCollectionTrackLoadable.state === "hasValue") {
      setCurrentTrack(trackList);
    }
  }, [playCollectionTrackLoadable.state, player]);

  return (
    <Atom.CardContainer marginGap={marginGap}>
      {collectionUri && (
        <Atom.CardTogglePlayButton
          hasCurrent={currentTrack === collectionUri}
          onClick={() => onChangeTrack(collectionUri)}
          className="button-play"
        >
          {currentTrack === collectionUri && !playbackState?.paused ? (
            <MdPause size="40px" color={theme?.colors?.text?.white} />
          ) : (
            <MdPlayArrow size="40px" color={theme?.colors?.text?.white} />
          )}
        </Atom.CardTogglePlayButton>
      )}
      <Atom.CardInfoContainer onClick={actionClick} hasAction={actionClick}>
        <Atom.CardImageContainer>
          {image ? (
            <Atom.CardImage
              type={type || "artist"}
              src={image}
              alt={ariaLabel}
            />
          ) : (
            <Logo size="8em" />
          )}
        </Atom.CardImageContainer>
        <Atom.TextsContainer>
          <Atom.CardTitle>{title}</Atom.CardTitle>
          <Atom.CardDescription>{description}</Atom.CardDescription>
        </Atom.TextsContainer>
      </Atom.CardInfoContainer>
    </Atom.CardContainer>
  );
};

export default memo(Card);
