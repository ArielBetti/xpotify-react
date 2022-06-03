import { useEffect } from "react";
import { useRecoilValueLoadable, useRecoilState } from "recoil";

// recoil: selectors
import { selectorGetSearchList } from "../../store/selectors";

// recoil: atoms
import { atomAlbums, atomArtist, atomTracks } from "../../store/atoms";

// components
import Search from "../../components/Search/search";
import TrackContainer from "../../components/TrackContainer/trackcontainer";
import ArtistContainer from "../../containers/Artists";
import AlbumContainer from "../../containers/Albums";
import Tracks from "../../components/Track";

// atoms: components
import * as Atom from "./style";
import Empty from "../../components/Empty";
import spotifyMethods from "../../utils/spotifyMethods";

// ::
const Home = () => {
  // recoil: loadable
  const searchResultLoadable = useRecoilValueLoadable(selectorGetSearchList);

  // recoil: state
  const [tracks, setTracks] = useRecoilState(atomTracks);
  const [albums, setAlbums] = useRecoilState(atomAlbums);
  const [artists, setArtist] = useRecoilState(atomArtist);

  useEffect(() => {
    if (searchResultLoadable.state === "hasValue") {
      const selected = searchResultLoadable.contents;

      setArtist(selected?.artists?.items);
      setAlbums(selected?.albums?.items);
      setTracks(selected?.tracks?.items);
    }
    if (searchResultLoadable.state === "hasError") {
      spotifyMethods.refreshToken();
    }
  }, [searchResultLoadable.state]);

  const RenderSearchList = () => {
    if (searchResultLoadable.contents) {
      return (
        <Atom.HomeSectionsContainer>
          <TrackContainer />
          <Tracks tracks={tracks} />
          <ArtistContainer artists={artists} />
          <AlbumContainer albums={albums} />
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
