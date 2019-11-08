import React from 'react';

export default function Header(props) {
    return(
        <header className="AppHeader">
                <div className="logo">
                    <img src={props.logo} alt="" />
                    <span>Xpotify</span>
                </div>
                <div className="user">
                    <span className="userName">{props.username}</span>
                    <img className="userImg" src={props.userimg} alt="" />
                </div>
            </header>
    );
}