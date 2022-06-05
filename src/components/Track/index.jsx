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

const track = ({ tracks }) => {
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
  }, [playTrackLoadable.state]);

  if (!tracks || tracks.length === 0) return null;

  return (
    <ul>
      {tracks.map((track) => (
        <li onClick={() => handleChangeTrack(track?.uri)}>{track?.name}</li>
      ))}
    </ul>
  );
};

export default memo(track);
