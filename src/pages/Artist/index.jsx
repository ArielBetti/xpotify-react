import { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { useNavigate, useParams } from "react-router-dom";

// assets
import logo from "../../assets/spotify-white.svg";
import returnIcon from "../../assets/return.svg";

// components
import TrackContainer from "../../components/TrackContainer/trackcontainer";
import Loader from "../../components/Loader";

// recoil: selectors
import {
  selectorGetArtistAlbuns,
  selectorGetArtistTracks,
} from "../../store/selectors";

// styles
import "./style.css";

// ::
const Artist = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // recoil: loadable
  const tracksLoadable = useRecoilValueLoadable(selectorGetArtistTracks(id));
  const albunsLoadable = useRecoilValueLoadable(selectorGetArtistAlbuns(id));

  // local: states
  const [artist, setArtist] = useState({});
  const [tracks, setTracks] = useState([]);
  const [albumArt, setAlbumArt] = useState("");

  useEffect(() => {
    if (albunsLoadable.state === "hasValue") {
      const result = albunsLoadable.contents;
      setArtist(result);
      setAlbumArt(result.images[1 || 0 || 2]?.url || logo);
    }
  }, [albunsLoadable.state]);

  useEffect(() => {
    if (tracksLoadable.state === "hasValue") {
      const tracks = tracksLoadable.contents.tracks;
      setTracks(tracks || []);
    }
  }, [tracksLoadable.state]);

  if (
    albunsLoadable.state === "loading" ||
    tracksLoadable.state === "loading"
  ) {
    return <Loader />;
  }

  return (
    <div className="SelectContainer">
      <div onClick={() => navigate(-1)} className="ReturnPage">
        <img src={returnIcon} />
        <input type="button" value="Voltar" />
      </div>

      <header className="AppHeader">
        <div className="logo">
          <img src={logo} alt="" />
          <span>Xpotify</span>
        </div>
      </header>
      <div className="SelectMainContainer">
        <div className="cardselectcontainer">
          <img className="imgselect" src={albumArt} alt="Foto do artista" />
          <h2>{artist.name}</h2>
        </div>
      </div>
      {tracks && tracks.length > 0 && (
        <TrackContainer tracks={tracks}></TrackContainer>
      )}
    </div>
  );
};

export default Artist;
