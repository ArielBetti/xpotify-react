import React, { useState } from 'react';
import Routes from '../../routes'
import './style.css';
import api from '../../services/api';
import logo from '../../assets/spotify-white.svg';
import playbutton from '../../assets/play-button.svg';
import pausebutton from '../../assets/pause-button.svg';
import notafound from '../../assets/warning-squad.svg'
import search from '../../assets/search-white.svg';

import Header from '../../components/Header/header';
import Search from '../../components/Search/search';
import TrackContainer from '../../components/TrackContainer/trackcontainer';
import ArtistContainer from '../../components/ArtistContainer/artistcontainer';
export default function Home({ history }) {

    const [inputSearch, SetinputSearch] = useState('');
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    async function getSearch(value) {
        const token = 'access_token=' + localStorage.access_token

        SetinputSearch(value);
        await api.get('/search?q=' + inputSearch + '&type=track%2Cartist%2Calbum%2Cplaylist&type=track&artist&album&playlist&market=US&limit=10&offset=1&' + token)
            .then(function (response) {
                // handle success
                setArtists(response.data.artists.items);
                setAlbums(response.data.albums);
                setTracks(response.data.tracks.items);
                setPlaylists(response.data.playlists);
                console.log(artists);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    let username = localStorage.userName;
    let userimg = localStorage.userImg;

    return (
        <div className="AppHome">
            <Header logo={logo} username={username} userimg={userimg}></Header>
            <main className="HomeMain">
                <Search onKeyUp={event => getSearch(event.target.value)} search={search}></Search>
                <div className="realtimeinput">
                    <h2>{inputSearch}</h2>
                </div>
            </main>
            <section className="ItensSearch">
                <TrackContainer tracks={tracks} ></TrackContainer>
               <ArtistContainer history={history} artists={artists}></ArtistContainer>
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
                                                onClick={event => history.push('Album/' + album.name)}
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
                <div id="style-15" className="itemSearch testeAi">
                    {playlists.items && playlists.items.length > 0 ? (
                        <div>
                            <h3 className="TypeTitle">Playlists</h3>
                            <div className="ContainerSearch">
                                <div className="sectionType">
                                </div>
                                {
                                    playlists.items.map(
                                        playlist => (
                                            <div
                                                className="Artista"
                                                key={playlist.id}>
                                                {playlist.images[0] ? (

                                                    <div
                                                        className="teste">
                                                        <img
                                                            className="searchpick"
                                                            src={playlist.images[0].url}
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
                                                    {playlist.name}
                                                </div>
                                                <div className="searchtype">
                                                    {playlist.owner.display_name}
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
        </div>
    );
}