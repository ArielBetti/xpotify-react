import React from 'react';
import './style.css';
import Logo from '../../assets/spotify.svg';
import Routes from '../../routes';

export default function() {
    return (
        <div className="AppLogin">
            <div className="logo"><img src={Logo} alt="Xpotify logo" />
                <h1 className="TitleLogin">Xpotify</h1>
            </div>
            {/* <a className="LoginBtn" href='https://xpotify-auth.herokuapp.com/login' >Login com Spotify </a>  */}
            <a className="LoginBtn" href="https://xpotify-auth.herokuapp.com/login" >Login com Spotify </a>
        </div>
    );
}
