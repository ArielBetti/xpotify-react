// components
import Playlist from "../../components/Playlist";
import Section from "../../components/Section";

// ::
const PlaylistContainer = ({ playlists }) => {
  if (!playlists || playlists.length === 0) return null;

  return (
    <Section title="Playlists">
      {playlists.map((playlist) => (
        <Playlist key={playlist?.id} playlist={playlist} />
      ))}
    </Section>
  );
};

export default PlaylistContainer;
