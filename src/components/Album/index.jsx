import { useNavigate } from "react-router-dom";

// assets
import logo from "../../assets/spotify-white.svg";

// components
import Card from "../Card";

const Album = ({ album }) => {
  const navigate = useNavigate();

  return (
    <Card
      actionClick={() => navigate(`/album/${album.id}`)}
      marginGap="10px 10px 10px 3px"
      image={album?.images[0 || 1 || 2]?.url || logo}
      ariaLabel="Arte do album"
      title={album?.name}
      type="album"
      description={album?.type}
    />
  );
};

export default Album;