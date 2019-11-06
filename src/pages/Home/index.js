import React, { useState } from 'react';
import Routes from '../../routes'
import './style.css';
import api from '../../services/api';
import logo from '../../assets/spotify-white.svg';
import playbutton from '../../assets/play-button.svg';
import pausebutton from '../../assets/pause-button.svg';
import search from '../../assets/search-white.svg';

export default function Home({ history }) {

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
                console.log(tracks);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function genMusicas(eventTrack) {
        const Play = document.getElementById('Playbtn' + eventTrack);
        const Pause = document.getElementById('Pausebtn' + eventTrack);
        const PauseAll = document.getElementsByClassName('pausepick');
        const PlayAll = document.getElementsByClassName('allplay')
        let Atual = document.getElementById(eventTrack);
        let Todas = document.getElementsByTagName('audio');

        if (Atual.paused) {
            Pause.classList.add('hiddenObejct');
            for (let i = 0; i < Todas.length; i++) {
                Todas[i].pause()
                PauseAll[i].classList.add('hiddenObject');
                PlayAll[i].classList.remove('hiddenObject');
            }
            Play.classList.add('hiddenObject');
            Pause.classList.add('IdentifyPlayer');
            Pause.classList.remove('hiddenObject');
            Atual.play();
        } else {
            Pause.classList.add('hiddenObject')
            Play.classList.remove('hiddenObject');
            Atual.pause();
        }
        
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
                                                // onClick={event => document.getElementById(track.id).paused ? (

                                                //     document.getElementById(track.id).play()
                                                // ) : (
                                                //     document.getElementById(track.id).pause()
                                                // )

                                                // }
                                                onClick={event => genMusicas(track.id)}
                                                // onChangeCapture={diztrack(track.id)}
                                                key={track.id}>
                                                {track.album.images[0] ? (

                                                    <div
                                                        className="teste">
                                                        <img
                                                            className="searchpick"
                                                            src={track.album.images[0].url}
                                                            alt="Foto do artista" />
                                                            <img 
                                                            id={'Playbtn' + track.id}
                                                            className="searchpick allplay playpick"
                                                            src={playbutton}/>
                                                            <img 
                                                            id={'Pausebtn' + track.id}
                                                            className="searchpick pausepick playpick hiddenObject"
                                                            src={pausebutton}/>
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
                                                <audio id={track.id} src={track.preview_url}></audio>

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
                                                onClick={event => history.push('Artista/' + artist.name)}
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