import { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { useParams } from "react-router-dom";

// recoil: selectors
import { selectorGetAlbum } from "../../store/selectors";

// components
import Loader from "../../components/Loader";
import ReturnButton from "../../components/ReturnButton";
import Hero from "../../components/Hero";

// containers
import TrackContainer from "../../containers/Tracks";

// atoms: components
import * as Atom from "./style";

// ::
const Artist = () => {
  const { id } = useParams();

  // recoil: loadable
  const albumLoadable = useRecoilValueLoadable(selectorGetAlbum(id));

  // local: states
  const [album, setAlbum] = useState({});
  const [albumArt, setAlbumArt] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (albumLoadable.state === "hasValue") {
      const result = albumLoadable.contents;
      if (result?.tracks?.items?.length > 0) {
        setTracks(result?.tracks?.items);
      }
      setAlbum(result);
      setAlbumArt(result.images[0 || 1 || 2]?.url);
    }
  }, [albumLoadable.contents, albumLoadable.state]);

  if (albumLoadable.state === "loading") {
    return <Loader />;
  }

  return (
    <Atom.ContainerArtistPage>
      <ReturnButton />
      <Hero title={album?.name} image={albumArt || ""} />
      <TrackContainer trackArt={albumArt} tracks={tracks} />
    </Atom.ContainerArtistPage>
  );
};

export default Artist;
