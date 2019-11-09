import React from 'react';
import Routes from '../../routes';
import logo from '../../assets/spotify-white.svg';

export default function Album(props) {

    const albums = props.albums;

    return (
        <div
            onClick={event => props.history.push('Album/' + albums.id)}
            className="Artista"
            key={albums.id}>
            {albums.images[0] ? (
                 <div
                 className="teste">
                 {albums.images.length > 2 ? (
                     <img
                     className="searchpick"
                     src={albums.images[2].url}
                     alt="Foto do artista" />
                 ) : (
                     <img
                     className="searchpick"
                     src={albums.images[0].url}
                     alt="Foto do artista" />
                 )}
                 
             </div>
            ) : (
                    <div
                        className="teste">
                        <div onClick={event => event.stopPropagation()} className="NullSelect"></div>
                        <img
                            className="searchpick"
                            src={logo}
                            alt="Foto do artista" />
                    </div>
                )
            }
            <div className="searchname">
                {albums.name}
            </div>
            <div className="searchtype">
                {albums.type}
            </div>
        </div>
    );
}