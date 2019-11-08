import React, { useEffect, useState } from 'react';
import Routes from '../../routes';
import api from '../../services/api';
import './style.css';
import logo from '../../assets/spotify-white.svg';
import retorna from '../../assets/return.svg';

import TrackContainer from '../../components/TrackContainer/trackcontainer';

export default function Artista({ history, match }) {
    const token = localStorage.access_token;
    const [response, setresponse] = useState();
    const [artist, setartist] = useState();
    const [tracks, settracks] = useState();

    useEffect(() => {
        async function getResponse() {
            if (response == null) {
                let res;
                res = await api.get(`/artists/${match.params.id}/top-tracks?country=US`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                setresponse(res.data);
                settracks(res.data.tracks);
               
                res = await api.get(`/artists/${match.params.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                setartist(res.data);
            }
        }
        getResponse()
    });
    return (
        <div className="SelectContainer">
            <div
                onClick={history.goBack}
                className="ReturnPage">
                <img src={retorna} />
                <input type="button" value="Voltar" />
            </div>

            <header className="AppHeader">
                <div className="logo">
                    <img src={logo} alt="" />
                    <span>Xpotify</span>
                </div>
            </header>
                <div className="SelectMainContainer">
                    <div className="cardselectcontainer">
                        {(artist || {}).images ? (
                            <img
                                className="imgselect"
                                src={(artist || {}).images[0].url}
                                alt="Foto do artista" />
                        ) : (
                                <div
                                    className="teste">
                                    <img
                                        className="imgselect"
                                        src={logo}
                                        alt="Foto do artista" />
                                </div>
                            )
                        }
                        <h2>{(artist || {}).name}</h2>
                    </div>
                </div>
                {
                    (tracks && tracks.length ? <TrackContainer tracks={tracks} ></TrackContainer> : <div></div>)
                }
            

        </div>
    );
}