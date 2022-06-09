import { useEffect } from "react";
import {
  useRecoilValueLoadable,
  useRecoilState,
} from "recoil";

// recoil: selectors
import { selectorGetSearchList } from "../../store/selectors";

// recoil: atoms
import {
  atomAlbums,
  atomArtist,
  atomPlaylists,
  atomTracks,
} from "../../store/atoms";

// containers
import ArtistContainer from "../../containers/Artists";
import AlbumContainer from "../../containers/Albums";
import TrackContainer from "../../containers/Tracks";

// components
import Search from "../../components/Search/search";

// atoms: components
import * as Atom from "./style";
import Empty from "../../components/Empty";
import spotifyMethods from "../../utils/spotifyMethods";
import PlaylistContainer from "../../containers/Playlists";

// ::
const Home = () => {
  // recoil: loadable
  const searchResultLoadable = useRecoilValueLoadable(selectorGetSearchList);

  // recoil: state
  const [artists, setArtist] = useRecoilState(atomArtist);
  const [albums, setAlbums] = useRecoilState(atomAlbums);
  const [tracks, setTracks] = useRecoilState(atomTracks);
  const [playlists, setPlaylists] = useRecoilState(atomPlaylists);

  useEffect(() => {
    if (searchResultLoadable.state === "hasValue") {
      const selected = searchResultLoadable.contents;

      setArtist(selected?.artists?.items);
      setAlbums(selected?.albums?.items);
      setTracks(selected?.tracks?.items);
      setPlaylists(selected?.playlists?.items);
    }
    if (searchResultLoadable.state === "hasError") {
      spotifyMethods.refreshToken();
    }
  }, [searchResultLoadable.state]);


  const RenderSearchList = () => {
    if (searchResultLoadable.contents) {
      return (
        <Atom.HomeSectionsContainer>
          <TrackContainer tracks={tracks} />
          <ArtistContainer artists={artists} />
          <AlbumContainer albums={albums} />
          <PlaylistContainer playlists={playlists} />
        </Atom.HomeSectionsContainer>
      );
    }
    return <Empty />;
  };

  return (
    <Atom.HomeContainer>
      <Search />
      <RenderSearchList />
    </Atom.HomeContainer>
  );
};

export default Home;
