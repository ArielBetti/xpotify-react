import { useEffect, useState, memo } from "react";
import { useRecoilValueLoadable } from "recoil";
import { useParams } from "react-router-dom";

// recoil: selectors
import { selectorGetPlaylist } from "../../store/selectors";

// components
import Loader from "../../components/Loader";
import ReturnButton from "../../components/ReturnButton";
import Hero from "../../components/Hero";

// containers
import TrackContainer from "../../containers/Tracks";

// atoms: components
import * as Atom from "./style";

// ::
const Playlist = () => {
  const { id } = useParams();

  // recoil: loadable
  const playlistLoadable = useRecoilValueLoadable(selectorGetPlaylist(id));

  // local: states
  const [playlist, setPlaylist] = useState({});
  const [playListArt, setPlaylistArt] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (playlistLoadable.state === "hasValue") {
      const result = playlistLoadable.contents;
      if (result?.tracks?.items?.length > 0) {
        const trackList = result?.tracks?.items?.map((item) => item?.track);
        setTracks(trackList);
      }
      setPlaylist(result);
      setPlaylistArt(result.images[0]?.url);
    }
  }, [playlistLoadable.contents, playlistLoadable.state]);

  if (playlistLoadable.state === "loading") {
    return <Loader />;
  }

  return (
    <Atom.ContainerArtistPage>
      <ReturnButton />
      <Hero
        collectionUri={playlist?.uri}
        title={playlist?.name}
        image={playListArt || ""}
      />
      <TrackContainer tracks={tracks} />
    </Atom.ContainerArtistPage>
  );
};

export default memo(Playlist);
