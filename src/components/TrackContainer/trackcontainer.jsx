import React from "react";

import Track from "../../components/Track";

export default function TrackContainer(props) {
  return (
    <div id="style-15" className="itemSearch">
      {props.tracks && props.tracks.length > 0 ? (
        <div>
          <h3 className="TypeTitle">Músicas</h3>
          <div className="ContainerSearch">
            <div className="sectionType"></div>
            {props.tracks.map((track) => (
              <Track key={track.id} track={track}></Track>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
