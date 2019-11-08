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

    function genMusicas(eventTrack) {

        const Play = document.getElementById('Playbtn' + eventTrack);
        const Pause = document.getElementById('Pausebtn' + eventTrack);
        const NotF = document.getElementById('NotF' + eventTrack);
        const Track = document.getElementById('Track' + eventTrack);
        const Prog = document.getElementById('Progress' + eventTrack);
        const ProgBar = document.getElementById('ProgressBar' + eventTrack);
        const PauseAll = document.getElementsByClassName('pausepick');
        const PlayAll = document.getElementsByClassName('allplay');
        const AllNotF = document.getElementsByClassName('err404');
        const AllTracks = document.getElementsByClassName("Tracks");
        const AllProgs = document.getElementsByClassName("ProgressMusic");
        const AllProgBars = document.getElementsByClassName('musicprogressbar');
        let Atual = document.getElementById(eventTrack);
        let Todas = document.getElementsByTagName('audio');

        if (Atual.paused) {
            if (Atual.currentTime == 0) {
                ProgBar.classList.remove('timermusic');
                ProgBar.classList.remove('playanimation');
            }
            Pause.classList.add('hiddenObejct');
            for (let i = 0; i < Todas.length; i++) {
                Todas[i].pause()
                AllProgBars[i].classList.remove('hiddenObject');
                AllProgBars[i].classList.add('pauseanimation');
                AllProgs[i].classList.add('DisplayPause');
                AllTracks[i].classList.remove('PlayingNow');
                PauseAll[i].classList.add('hiddenObject');
                PlayAll[i].classList.remove('hiddenObject');
                AllNotF[i].classList.add('hiddenObject');
            }
            ProgBar.classList.add('timermusic');
            Play.classList.add('hiddenObject');
            Pause.classList.add('IdentifyPlayer');
            Track.classList.add("PlayingNow");
            Pause.classList.remove('hiddenObject');
            Prog.classList.remove('DisplayPause');
            Prog.classList.remove('hiddenObeject');
            ProgBar.classList.remove('pauseanimation');
            ProgBar.classList.add('playanimation');
            Atual.play();
            Prog.classList.remove('hiddenObject');

            if (Atual.src == '') {

                Play.classList.add('hiddenObject');
                Pause.classList.add('hiddenObject');
                NotF.classList.remove('hiddenObject');
                NotF.classList.add('IdentifyPlayer');
                Track.classList.add('PlayingNow');
                Prog.classList.add('DisplayPause');
                ProgBar.classList.add('playanimation');

            }
        } else {

            Prog.classList.remove('hiddenObeject');
            Pause.classList.add('hiddenObject');
            Track.classList.remove('PlayingNow');
            Play.classList.remove('hiddenObject');
            Prog.classList.add('DisplayPause');
            ProgBar.classList.add('pauseanimation');
            Atual.pause();

        }
    }



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
            // console.log(album);
        }
        console.log('Esses são as tracks', tracks);

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