import React from 'react';
import Routes from '../../routes';

import Album from '../../components/Album/album';

export default function AlbumContainer(props) {
    return(
        <div id="style-15" className="itemSearch">
        {props.albums && props.albums.length > 0 ? (
            <div>
                <h3 className="TypeTitle">Albums</h3>
                <div className="ContainerSearch">
                    <div className="sectionType">
                    </div>
                    {
                        props.albums.map(
                            album => (
                               <Album history={props.history} albums={album}></Album>
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