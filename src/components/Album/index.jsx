import { useNavigate } from "react-router-dom";

// components
import Card from "../Card";

const Album = ({ album }) => {
  const navigate = useNavigate();

  return (
    <Card
      actionClick={() => navigate(`/album/${album.id}`)}
      marginGap="10px 10px 10px 3px"
      image={album?.images[0 || 1 || 2]?.url}
      ariaLabel="Arte do album"
      title={album?.name}
      type="album"
      description={album?.type}
      collectionUri={album?.uri}
    />
  );
};

export default Album;
