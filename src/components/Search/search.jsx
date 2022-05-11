import { useCallback, useState, useEffect } from "react";
import { debounce } from "lodash";
import { useRecoilState, useSetRecoilState } from "recoil";

// recoil: atoms: hash
import { atomHashGlobalSearch } from "../../store/atomsHash";

// recoil: atoms
import {
  atomAlbums,
  atomArtist,
  atomGlobalSearch,
  atomTracks,
} from "../../store/atoms";

// atoms: components
import * as Atom from "./style";

// typography
import * as Typography from "../../Typography";

// ::
const Search = () => {
  // recoil: states
  const [search, setSearch] = useRecoilState(atomGlobalSearch);

  // local: states
  const [fakeSearch, setFakeSearch] = useState("");
  const setTracks = useSetRecoilState(atomTracks);
  const setAlbums = useSetRecoilState(atomAlbums);
  const setArtist = useSetRecoilState(atomArtist);
  // recoil: hash
  const [searchHash, setSearchHash] = useRecoilState(atomHashGlobalSearch);

  const preventsubmit = (event) => {
    event.preventDefault();
  };

  function useDebounce(callback, deps) {
    return useCallback(debounce(callback, 300), deps);
  }

  const onChangedLocalDebounce = useDebounce(
    (value) => {
      setSearch(value);
    },
    [search]
  );

  const onChangeSearch = useCallback(
    (value) => {
      setFakeSearch(() => {
        const newValue = value;
        onChangedLocalDebounce(newValue);
        setSearchHash(searchHash + 1);
        return newValue;
      });
    },
    [onChangedLocalDebounce]
  );

  useEffect(() => {
    setFakeSearch(search || "");
  }, []);

  useEffect(() => {
    if (!fakeSearch) {
      setArtist("");
      setAlbums("");
      setTracks("");
    }
  }, [search]);

  return (
    <Atom.SearchContainer onSubmit={preventsubmit}>
      <Typography.ParagraphLarge>Pesquisar por:</Typography.ParagraphLarge>
      <Atom.SearchInput
        type="text"
        value={fakeSearch}
        placeholder="Artistas, músicas ou albums"
        onChange={(event) => onChangeSearch(event.target.value)}
      />
    </Atom.SearchContainer>
  );
};

export default Search;
