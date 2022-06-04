import { memo } from "react";

// children: components
import PlayerControls from "./Controls";
import PlayerInfos from "./Infos";
import PlayerProgressBar from "./ProgressBar";

// atoms: components
import * as Atom from "./style";

// ::
const MySpotifyPlayer = () => {
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
