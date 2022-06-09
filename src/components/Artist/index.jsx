import { useNavigate } from "react-router-dom";

// components
import Card from "../Card";

const Artist = ({ artist }) => {
  const navigate = useNavigate();

  return (
    <Card
      actionClick={() => navigate(`/artista/${artist.id}`)}
      marginGap="10px 10px 10px 3px"
      image={artist?.images[2]?.url || artist?.images[0]?.url}
      ariaLabel="Foto do artista"
      title={artist?.name}
      description={artist?.type}
      collectionUri={artist?.uri}
    />
  );
};

export default Artist;
