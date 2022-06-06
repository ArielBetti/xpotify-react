import { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { useParams } from "react-router-dom";

// recoil: selectors
import {
  selectorGetArtist,
  selectorGetArtistTracks,
  selectorGetArtistAlbums,
} from "../../store/selectors";

// components
import Loader from "../../components/Loader";
import ReturnButton from "../../components/ReturnButton";
import Hero from "../../components/Hero";

// containers
import AlbumContainer from "../../containers/Albums";
import TrackContainer from "../../containers/Tracks";

// atoms: components
import * as Atom from "./style";

// ::
const Artist = () => {
  const { id } = useParams();

  // recoil: loadable
  const tracksLoadable = useRecoilValueLoadable(selectorGetArtistTracks(id));
  const artistLoadable = useRecoilValueLoadable(selectorGetArtist(id));
  const artistAlbumsLoadable = useRecoilValueLoadable(
    selectorGetArtistAlbums(id)
  );

  // local: states
  const [artist, setArtist] = useState({});
  const [artistArt, setArtistArt] = useState("");
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (artistLoadable.state === "hasValue") {
      const result = artistLoadable.contents;
      setArtist(result);
      setArtistArt(result.images[0 || 1 || 2]?.url);
    }
  }, [artistLoadable.state]);

  useEffect(() => {
    if (tracksLoadable.state === "hasValue") {
      const tracks = tracksLoadable.contents.tracks;
      setTracks(tracks || []);
    }
  }, [tracksLoadable.state]);

  useEffect(() => {
    if (artistAlbumsLoadable.state === "hasValue") {
      const albums = artistAlbumsLoadable.contents.items;
      setAlbums(albums || []);
    }
  }, [artistAlbumsLoadable.state]);

  if (
    artistLoadable.state === "loading" ||
    tracksLoadable.state === "loading" ||
    artistAlbumsLoadable.state === "loading"
  ) {
    return <Loader />;
  }

  return (
    <Atom.ContainerArtistPage>
      <ReturnButton />
      <Hero title={artist.name} image={artistArt} />
      <TrackContainer tracks={tracks} />
      <AlbumContainer albums={albums} />
    </Atom.ContainerArtistPage>
  );
};

export default Artist;
