import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import Logo from '../../assets/spotify.svg';

import Routes from '../../routes';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class Login extends React.Component {

    componentDidMount() {

        // var aScript = document.createElement('script');
        // aScript.type = 'text/javascript';
        // aScript.src = "../public/js/getToken.js";

        function getHashParams() {
            let hashParams = {};
            let e, r = /([^&;=]+)=?([^&;]*)/g,
                q = window.location.hash.substring(1);
            while (e = r.exec(q)) {
                hashParams[e[1]] = decodeURIComponent(e[2]);
            }
            return hashParams;
        }

        let params = getHashParams();

        if(localStorage.access_token == 'undefined'){
            let access_token = params.access_token,
            refresh_token = params.refresh_token,
            error = params.error;

            localStorage.access_token = access_token;
        }

        if (!localStorage.access_token) {
            let access_token = params.access_token,
                refresh_token = params.refresh_token,
                error = params.error;

            localStorage.access_token = access_token;
        }
        console.log('Teste');
    }

    render() {
        return (
            <div className="AppLogin">
                <div className="logo"><img src={Logo} alt="Xpotify logo" />
                    <h1 className="TitleLogin">Xpotify</h1>
                </div>
                {/* <a className="LoginBtn" href='https://xpotify-auth.herokuapp.com/login' >Login com Spotify </a>  */}
                <a className="LoginBtn" href='http://localhost:8080/login' >Login com Spotify </a>
            </div>
        );
    }
}

export default Login 
