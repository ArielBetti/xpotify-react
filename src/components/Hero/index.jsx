import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useTheme } from "styled-components";
import {
  usePlaybackState,
  useSpotifyPlayer,
} from "react-spotify-web-playback-sdk";

// recoil: selectors
import { selectorSetTrackCollection } from "../../store/selectors";

// icons
import { MdPlayArrow, MdPause } from "react-icons/md";

// typography
import Logo from "../../assets/Logo";
import { atomCurrentTrack, atomTrackList } from "../../store/atoms";
import { atomHashTrackList } from "../../store/atomsHash";

// atoms: components
import * as Atom from "./style";
import { useEffect } from "react";

const Hero = ({ collectionUri, title, image }) => {
  const theme = useTheme();
  const player = useSpotifyPlayer();
  const playbackState = usePlaybackState();

  // recoil: states
  const [currentTrack, setCurrentTrack] =
    useRecoilState(atomCurrentTrack) || "";
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
  }, [playCollectionTrackLoadable.state, player, setCurrentTrack, trackList]);

  return (
    <Atom.HeroContainer>
      <Atom.HeroImgWrapper>
        <Atom.HeroTogglePlayButton
          hasCurrent={currentTrack === collectionUri}
          onClick={() => onChangeTrack(collectionUri)}
          className="button-play"
        >
          {currentTrack === collectionUri && !playbackState?.paused ? (
            <MdPause size="40px" color={theme?.colors?.text?.white} />
          ) : (
            <MdPlayArrow size="40px" color={theme?.colors?.text?.white} />
          )}
        </Atom.HeroTogglePlayButton>
        {image ? (
          <Atom.HeroImg effect="black-and-white" src={image} alt="Arte do artista/album" />
        ) : (
          <Logo size="200px" />
        )}
      </Atom.HeroImgWrapper>
      <Atom.TitleWrapper>{title}</Atom.TitleWrapper>
    </Atom.HeroContainer>
  );
};

export default Hero;
