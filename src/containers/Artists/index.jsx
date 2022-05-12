// components
import Artist from "../../components/Artist/artist";
import Section from "../../components/Section";

// ::
const ArtistContainer = ({ artists }) => {
  if (!artists || artists.length === 0) return null;

  return (
    <Section title="Artistas">
      {artists.map((artist) => (
        <Artist key={artist?.id} artist={artist} />
      ))}
    </Section>
  );
};

export default ArtistContainer;
