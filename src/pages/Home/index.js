import React, { useState } from 'react';
import './style.css';
import api from '../../services/api';
import logo from '../../assets/spotify-white.svg';
import search from '../../assets/search-white.svg';

export default function Home() {

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