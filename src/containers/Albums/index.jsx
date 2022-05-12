// components
import Section from "../../components/Section";
import Album from "../../components/Album";

// ::
const AlbumContainer = ({ albums }) => {
  if (!albums || albums.length === 0) return null;

  return (
    <Section title="Albums">
      {albums.map((album) => (
        <Album key={album?.id} album={album} />
      ))}
    </Section>
  );
};

export default AlbumContainer;
