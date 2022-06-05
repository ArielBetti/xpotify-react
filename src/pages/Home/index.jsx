import { useEffect } from "react";
import {
  useRecoilValueLoadable,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

// recoil: selectors
import { selectorGetSearchList } from "../../store/selectors";

// recoil: atoms
import {
  atomAlbums,
  atomArtist,
  atomDevice,
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
import { usePlayerDevice } from "react-spotify-web-playback-sdk";

// ::
const Home = () => {
  // device
  const device = usePlayerDevice();

  // recoil: loadable
  const searchResultLoadable = useRecoilValueLoadable(selectorGetSearchList);

  // recoil: state
  const [tracks, setTracks] = useRecoilState(atomTracks);
  const [albums, setAlbums] = useRecoilState(atomAlbums);
  const [artists, setArtist] = useRecoilState(atomArtist);
  const setUserDevice = useSetRecoilState(atomDevice);

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

  useEffect(() => {
    setUserDevice(device);
  }, [device]);

  const RenderSearchList = () => {
    if (searchResultLoadable.contents) {
      return (
        <Atom.HomeSectionsContainer>
          <TrackContainer tracks={tracks} />
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
