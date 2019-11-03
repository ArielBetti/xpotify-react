import React, { useState } from 'react';
import './style.css';
import api from '../../services/api';
import logo from '../../assets/spotify-white.svg';
import search from '../../assets/search-white.svg';

export default function Home() {

    function TokenRemain() {

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
    }

    /* Permanece o Token no LocaStorage */
    TokenRemain()

    const token = 'access_token='+ localStorage.access_token;
    const InUserDetails = JSON.parse(localStorage.userDetails);

    async function getUser() {
        await api.get('/me?' + token)
            .then(function (response) {
                // handle success
                console.log(response);
                const userDetails = {
                    userName: response.data.display_name,
                    userImg: response.data.images[0]
                }

                localStorage.userDetails = JSON.stringify(userDetails);

                return userDetails;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    getUser();

    return (
        <div className="AppHome">
            <header className="AppHeader">
                <div className="logo">
                    <img src={logo} alt="" />
                    <span>Xpotify</span>
                </div>
                <div className="user">
                    <span className="userName">{InUserDetails.userName}</span>
                    <img className="userImg" src={InUserDetails.userImg.url} alt="" />
                </div>
            </header>
            <main className="HomeMain">
                <form className="BuscadorContainer">
                    <input type="text"
                        className="Buscador"
                        placeholder="Busque por artistas ou músicas"
                    />
                    <button><img src={search} alt="" /></button>
                </form>
            </main>
        </div>
    );
}