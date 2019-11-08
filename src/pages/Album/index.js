import React, { useEffect, useState } from 'react';
import Routes from '../../routes';
import api from '../../services/api';
import './style.css';
import logo from '../../assets/spotify-white.svg';
import retorna from '../../assets/return.svg';
import playbutton from '../../assets/play-button.svg';
import pausebutton from '../../assets/pause-button.svg';
import notafound from '../../assets/warning-squad.svg'

import TrackContainer from '../../components/TrackContainer/trackcontainer';

export default function Select({ history, match }) {
    const token = localStorage.access_token;
    const [response, setresponse] = useState();
    const [album, setalbum] = useState();
    const [tracks, settracks] = useState();

    useEffect(() => {
        async function getResponse() {
            if (response == null) {
                let res;
                res = await api.get(`/albums/${match.params.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }

                );
                setresponse(res.data);
                setalbum(res.data);
                settracks(res.data.tracks.items);
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
                    {(album || {}).images ? (
                        <img
                            className="imgselect"
                            src={(album || {}).images[0].url}
                            alt="Foto do albuma" />
                    ) : (
                            <div
                                className="teste">
                                <img
                                    className="imgselect"
                                    src={logo}
                                    alt="Foto do albuma" />
                            </div>
                        )
                    }
                    <h2>{(album || {}).name}</h2>
                </div>
            </div>
            {
                // (tracks && tracks.length ? <TrackContainer tracks={tracks} ></TrackContainer> : <div></div>)
                <div id="style-15" className="itemSearch">
                    {tracks && tracks.length ? (
                        <div>
                            <h3 className="TypeTitle">Músicas</h3>
                            <div className="ContainerSearch">
                                <div className="sectionType">
                                </div>
                                {
                                    tracks.map(
                                        track => (
                                            <div

                                                className="Artista Tracks"
                                                onClick={() => genMusicas(track.id)}
                                                // onChangeCapture={diztrack(track.id)}
                                                key={track.id}
                                                id={'Track' + track.id}
                                            >
                                                {(album || {}).images ? (

                                                    <div
                                                        className="teste">
                                                        <img
                                                            className="searchpick"
                                                            src={(album || {}).images[0].url}
                                                            alt="Foto do artista" />
                                                        <img
                                                            id={'Playbtn' + track.id}
                                                            className="searchpick allplay playpick"
                                                            src={playbutton} />
                                                        <img
                                                            id={'Pausebtn' + track.id}
                                                            className="searchpick pausepick playpick hiddenObject"
                                                            src={pausebutton} />
                                                        <img
                                                            id={'NotF' + track.id}
                                                            className="searchpick err404 playpick hiddenObject"
                                                            src={notafound} />
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
                                                    {track.type}
                                                </div>
                                                <div id={"Progress" + track.id} className="ProgressMusic DisplayPause">
                                                    <div id={'ProgressBar' + track.id} className="musicprogressbar timermusic pauseanimation"></div>
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
            }

        </div>
    );
}