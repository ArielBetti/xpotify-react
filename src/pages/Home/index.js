import React, { useState } from 'react';
import Routes from '../../routes'
import './style.css';
import api from '../../services/api';
import logo from '../../assets/spotify-white.svg';
import search from '../../assets/search-white.svg';

import Header from '../../components/Header/header';
import Search from '../../components/Search/search';
import TrackContainer from '../../components/TrackContainer/trackcontainer';
import ArtistContainer from '../../components/ArtistContainer/artistcontainer';
import AlbumContainer from '../../components/AlbumContainer/albumcontainer';

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
                setAlbums(response.data.albums.items);
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
               <AlbumContainer history={history} albums={albums}></AlbumContainer>
            </section>
        </div>
    );
}