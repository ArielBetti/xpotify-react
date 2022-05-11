import { useRecoilValue } from "recoil";

// recoil: atoms
import { atomArtist } from "../../store/atoms";

// typography
import * as Typography from "../../Typography";

// components
import Artist from "../../components/Artist/artist";
import Section from "../../components/Section";

// ::
const ArtistContainer = () => {
  // recoil: states
  const artists = useRecoilValue(atomArtist);

  if (!artists || artists.length === 0) return null;

  return (
    <Section>
      {artists.map((artist) => (
        <Artist key={artist?.id} artist={artist}></Artist>
      ))}
    </Section>
  );
};

export default ArtistContainer;
