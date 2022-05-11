import { useEffect, useMemo } from "react";
import { useRecoilValueLoadable, useRecoilState, useRecoilValue } from "recoil";

// recoil: selectors
import { selectorGetSearchList } from "../../store/selectors";

// recoil: atoms
import { atomAlbums, atomArtist, atomToken, atomTracks } from "../../store/atoms";

// components
import Search from "../../components/Search/search";
import TrackContainer from "../../components/TrackContainer/trackcontainer";
import ArtistContainer from "../../containers/Artists";
import AlbumContainer from "../../components/AlbumContainer/albumcontainer";

// atoms: components
import * as Atom from "./style";
import Section from "../../components/Section";
import Empty from "../../components/Empty";
import spotifyMethods from "../../utils/spotifyMethods";

// ::
const Home = () => {
  // recoil: loadable
  const searchResultLoadable = useRecoilValueLoadable(selectorGetSearchList);

  // recoil: state
  const [tracks, setTracks] = useRecoilState(atomTracks);
  const [albums, setAlbums] = useRecoilState(atomAlbums);
  const [artist, setArtist] = useRecoilState(atomArtist);
  const token = useRecoilValue(atomToken);

  useEffect(() => {
    console.log('ds', token);
  }, [token]);

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

  const RenderSearchList = useMemo(() => {
    if (searchResultLoadable.contents) {
      return (
        <Atom.HomeSectionsContainer>
          <TrackContainer />
          <Section title={artist ? "Artista" : ""}>
            <ArtistContainer />
          </Section>
          <AlbumContainer />
        </Atom.HomeSectionsContainer>
      );
    }
    return <Empty />;
  }, [searchResultLoadable.contents]);

  return (
    <Atom.HomeContainer>
      <Search />
      {RenderSearchList}
    </Atom.HomeContainer>
  );
};

export default Home;
