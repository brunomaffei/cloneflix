import React from "react";

import "./Header.css";

export const Header = ({black}) => {
    return (
        <header className={black ? 'black' : ''}>

<div className="header--logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.png" alt="Netflix logo"/>
            </div>
            <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="logo-usuario"/>
            </div>
        </header>
        )
}