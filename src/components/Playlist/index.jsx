import { useNavigate } from "react-router-dom";

// components
import Card from "../Card";

const Playlist = ({ playlist }) => {
  const navigate = useNavigate();

  return (
    <Card
      actionClick={() => navigate(`/playlist/${playlist.id}`)}
      marginGap="10px 10px 10px 3px"
      image={playlist?.images[2]?.url || playlist?.images[0]?.url}
      ariaLabel="Foto da playlist"
      title={playlist?.name}
      description={playlist?.owner?.display_name || playlist?.type}
      collectionUri={playlist?.uri}
    />
  );
};

export default Playlist;
