import { memo } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

// recoil: atoms
import { atomTrackList } from "../../store/atoms";
import { selectorSetSoundTrack } from "../../store/selectors";

const track = ({ tracks }) => {
  // recoil: states
  const [trackList, setTrackList] = useRecoilState(atomTrackList);

  // recoil: loadable
  const loadablePlayTrack = useRecoilValueLoadable(
    selectorSetSoundTrack(trackList)
  );

  if (!tracks || tracks.length === 0) return null;

  return (
    <ul>
      {tracks.map((track) => (
        <li onClick={() => setTrackList(track?.uri)}>{track?.name}</li>
      ))}
    </ul>
  );
};

export default memo(track);
