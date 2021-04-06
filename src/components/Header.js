import React from 'react';
import '../stylesheets/header.css';
import {NavLink} from "react-router-dom";


function Header() {
    return (
            <div className="header">
                <ul>
                    <li><NavLink to="/" exact>homepage</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                </ul>
            <h1>First Cat App Ever</h1>
            </div>

    );
}

export default Header;