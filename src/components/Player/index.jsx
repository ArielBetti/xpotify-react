import { memo } from "react";
import { useRecoilValue } from "recoil";
import { atomUser } from "../../store/atoms";

// children: components
import PlayerControls from "./Controls";
import PlayerInfos from "./Infos";
import PlayerProgressBar from "./ProgressBar";

// atoms: components
import * as Atom from "./style";

// ::
const MySpotifyPlayer = () => {
  const hasUser = useRecoilValue(atomUser);

  if (!hasUser) return null;

  return (
    <Atom.PlayerContainer>
      <Atom.PlayerBarContainer>
        <PlayerInfos />
        <Atom.PlayerSeekBarContainer>
          <PlayerControls />
          <PlayerProgressBar />
        </Atom.PlayerSeekBarContainer>
      </Atom.PlayerBarContainer>
    </Atom.PlayerContainer>
  );
};

export default memo(MySpotifyPlayer);
