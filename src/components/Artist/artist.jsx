import React from 'react';
import Routes from '../../routes';
import logo from '../../assets/spotify-white.svg';

export default function Artist(props) {

    const artists = props.artists;

    return (
        <div
            className="Artista"
            onClick={event => props.history.push('Artista/' + artists.id)}
            key={artists.id}>
            {artists.images[0] ? (
                <div
                    className="teste">
                    <img
                        className="searchpick"
                        src={artists.images[0].url}
                        alt="Foto do artista" />
                </div>
            ) : (
                    <div
                        className="teste">
                        <div className="NullSelect"></div>
                        <img
                            className="searchpick"
                            src={logo}
                            alt="Foto do artista" />
                    </div>
                )
            }
            <div className="searchname">
                {artists.name}
            </div>
            <div className="searchtype">
                {artists.type}
            </div>

        </div>
    );
}