import React, { Component } from 'react';
import './style.css';
import logo from '../../assets/spotify-white.svg'
import search from '../../assets/search-white.svg'

class Home extends React.Component {

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

        if (localStorage.access_token == 'undefined') {
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
            <div className="AppHome">
                <header className="AppHeader">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <span>Xpotify</span>
                    </div>
                    <div className="user">
                        <span className="userName">arielbetti99</span>
                        <img className="userImg" src="https://profile-images.scdn.co/images/userprofile/default/75591f2089ba602643cf180e38f516ebb337474a" alt="" />
                    </div>
                </header>
                <main className="HomeMain">
                    <form className="BuscadorContainer">
                        <input type="text" className="Buscador" placeholder="Busque por artistas ou músicas" />
                        <button><img src={search} alt="" /></button>
                    </form>
                </main>
            </div>
        );
    }

}


export default Home