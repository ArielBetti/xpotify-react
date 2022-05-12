import { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { useParams } from "react-router-dom";

// recoil: selectors
import {
  selectorGetArtist,
  selectorGetArtistTracks,
  selectorGetArtistAlbums,
} from "../../store/selectors";

// assets
import logo from "../../assets/spotify-white.svg";

// components
import Loader from "../../components/Loader";
import ReturnButton from "../../components/ReturnButton";
import Hero from "../../components/Hero";

// atoms: components
import * as Atom from "./style";
import AlbumContainer from "../../containers/Albums";

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
      setArtistArt(result.images[0 || 1 || 2]?.url || logo);
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
      <AlbumContainer albums={albums} />
      {/* {tracks && tracks.length > 0 && (
        <TrackContainer tracks={tracks}></TrackContainer>
      )} */}
    </Atom.ContainerArtistPage>
  );
};

export default Artist;
