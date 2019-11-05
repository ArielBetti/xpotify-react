import React, { useState } from 'react';
import './style.css';
import api from '../../services/api';
import logo from '../../assets/spotify-white.svg';
import search from '../../assets/search-white.svg';

export default function Home() {

    const [inputSearch, SetinputSearch] = useState('');
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    function preventsubmit(event) {
        event.preventDefault();
    }

    async function getSearch(value) {
        const token = 'access_token=' + localStorage.access_token

        SetinputSearch(value);
        await api.get('/search?q=' + inputSearch + '&type=track%2Cartist%2Calbum%2Cplaylist&type=track&artist&album&playlist&market=US&limit=10&offset=1&' + token)
            .then(function (response) {
                // handle success
                setArtists(response.data.artists);
                setAlbums(response.data.albums);
                setTracks(response.data.tracks);
                setPlaylists(response.data.playlists);

                console.log('response.data', response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    let username = localStorage.userName;
    let userimg = localStorage.userImg;

    return (
        <div className="AppHome">
            <header className="AppHeader">
                <div className="logo">
                    <img src={logo} alt="" />
                    <span>Xpotify</span>
                </div>
                <div className="user">
                    <span className="userName">{username}</span>
                    <img className="userImg" src={userimg} alt="" />
                </div>
            </header>
            <main className="HomeMain">
                <form
                    onSubmit={preventsubmit}
                    className="BuscadorContainer">
                    <input type="text"
                        className="Buscador"
                        placeholder="Busque por artistas ou músicas"
                        onKeyUp={event => getSearch(event.target.value)}
                    />
                    <button><img src={search} alt="" /></button>
                </form>
                <div className="realtimeinput">
                    <h2>{inputSearch}</h2>
                </div>
            </main>
            <section className="ItensSearch">
                <div id="style-15" className="itemSearch">
                    {tracks.items && tracks.items.length > 0 ? (
                        <div>
                            <h3 className="TypeTitle">Músicas</h3>
                            <div className="ContainerSearch">
                                <div className="sectionType">
                                </div>
                                {
                                    tracks.items.map(
                                        track => (
                                            <div
                                                className="Artista"
                                                key={track.id}>
                                                {track.album.images[0] ? (

                                                    <div
                                                        className="teste">
                                                        <img
                                                            className="searchpick"
                                                            src={track.album.images[0].url}
                                                            alt="Foto do artista" />
                                                    </div>
                                                ) : (
                                                        <div
                                                            className="teste">
                                                            <img
                                                                className="searchpick"
                                                                src={logo}
                                                                alt="Foto do artista" />
                                                        </div>
                                                    )
                                                }
                                                <div className="searchname">
                                                    {track.name}
                                                </div>
                                                <div className="searchtype">
                                                    {track.artists[0].name}
                                                </div>

                                            </div>
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
                <div id="style-15" className="itemSearch">
                    {artists.items && artists.items.length > 0 ? (
                        <div className='testemad'>
                            <h3 className="TypeTitle">Artistas</h3>
                            <div id="style-15" className="ContainerSearch">
                                <div className="sectionType">
                                </div>
                                {
                                    artists.items.map(
                                        artist => (
                                            <div
                                                className="Artista"
                                                key={artist.id}>
                                                {artist.images[0] ? (

                                                    <div
                                                        className="teste">
                                                        <img
                                                            className="searchpick"
                                                            src={artist.images[0].url}
                                                            alt="Foto do artista" />
                                                    </div>
                                                ) : (
                                                        <div
                                                            className="teste">
                                                            <img
                                                                className="searchpick"
                                                                src={logo}
                                                                alt="Foto do artista" />
                                                        </div>
                                                    )
                                                }
                                                <div className="searchname">
                                                    {artist.name}
                                                </div>
                                                <div className="searchtype">
                                                    {artist.type}
                                                </div>

                                            </div>
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
                <div id="style-15" className="itemSearch">
                    {albums.items && albums.items.length > 0 ? (
                        <div>
                            <h3 className="TypeTitle">Albums</h3>
                            <div className="ContainerSearch">
                                <div className="sectionType">
                                </div>
                                {
                                    albums.items.map(
                                        album => (
                                            <div
                                                className="Artista"
                                                key={album.id}>
                                                {album.images[0] ? (

                                                    <div
                                                        className="teste">
                                                        <img
                                                            className="searchpick"
                                                            src={album.images[0].url}
                                                            alt="Foto do artista" />
                                                    </div>
                                                ) : (
                                                        <div
                                                            className="teste">
                                                            <img
                                                                className="searchpick"
                                                                src={logo}
                                                                alt="Foto do artista" />
                                                        </div>
                                                    )
                                                }
                                                <div className="searchname">
                                                    {album.name}
                                                </div>
                                                <div className="searchtype">
                                                    {album.type}
                                                </div>

                                            </div>
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
            </section>
            <section className="player">

            </section>
        </div>
    );
}