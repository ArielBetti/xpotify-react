import React from 'react';
import Routes from '../../routes';
import logo from '../../assets/spotify-white.svg';

export default function Album(props) {

    const albums = props.albums;

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

    return (
        <div
            onClick={event => props.history.push('Album/' + albums.id)}
            className="Artista"
            key={albums.id}>
            {albums.images[0] ? (
                <div
                    className="teste">
                    <img
                        className="searchpick"
                        src={albums.images[0].url}
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
                {albums.name}
            </div>
            <div className="searchtype">
                {albums.type}
            </div>
        </div>
    );
}