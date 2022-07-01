import { memo, useEffect } from "react";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";

// recoil: atoms
import { atomCurrentTrack, atomTrackList } from "../../store/atoms";
import { atomHashTrackList } from "../../store/atomsHash";

// recoil: selectors
import { selectorSetSoundTrack } from "../../store/selectors";

// components
import Track from "../../components/Track";

// atoms: components
import * as Atom from "./style";
import Section from "../../components/Section";

// ::
const TrackContainer = ({ tracks, trackArt }) => {
  // recoil: states
  const [hashTrackList, setHashTrackList] = useRecoilState(atomHashTrackList);
  const [trackList, setTrackList] = useRecoilState(atomTrackList);
  const setCurrentTrack = useSetRecoilState(atomCurrentTrack);

  // recoil: loadable
  const playTrackLoadable = useRecoilValueLoadable(selectorSetSoundTrack);

  const handleChangeTrack = (trackUri) => {
    setTrackList(trackUri);
    setHashTrackList(hashTrackList + 1);
  };

  useEffect(() => {
    if (playTrackLoadable.state === "hasValue") {
      setCurrentTrack(trackList);
    }
  }, [playTrackLoadable.state, setCurrentTrack, trackList]);

  if (!tracks || tracks.length === 0) return null;

  return (
    <Section title="Músicas">
      <Atom.TracksContainer>
        {tracks.map((track) => (
          <Track
            key={track?.id}
            trackArt={trackArt}
            track={track}
            handleChangeTrack={handleChangeTrack}
          />
        ))}
      </Atom.TracksContainer>
    </Section>
  );
};

export default memo(TrackContainer);
