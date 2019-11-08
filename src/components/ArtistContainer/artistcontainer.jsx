import React from 'react';

import Artist from '../../components/Artist/artist';

export default function ArtistContainer(props) {
    return (
        <div id="style-15" className="itemSearch">
            {props.artists && props.artists.length > 0 ? (
                <div className='testemad'>
                    <h3 className="TypeTitle">Artistas</h3>
                    <div id="style-15" className="ContainerSearch">
                        <div className="sectionType">
                        </div>
                        {
                            props.artists.map(
                                artist => (
                                    <Artist 
                                    key={artist.id}
                                    history={props.history} artists={artist} ></Artist>
                                )
                            )
                        }
                    </div>
                </div>
            ) : (
                    <div></div>
                )
            }
        </div>
    );
}