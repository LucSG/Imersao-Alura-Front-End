import React from "react";
import './Sidebar.css';

import LogoSpotify from '../../assets/icons/logo-spotify.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div class="sidebar">
            <nav class="sidebar__navigation">
                <div class="logo">
                    <a href="#home">
                        <img src={LogoSpotify} alt="Logo do Spotify"/>
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="#inicio">
                            <span><FontAwesomeIcon icon={faHome}/></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="#buscar">
                            <span><FontAwesomeIcon icon={faSearch}/></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="library">
                <div class="library__content">
                    <button class="library__button">
                        <span class="fa fas fa-book"></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <span class="fa fa-plus"></span>
                </div>
                <section class="section-playlist">
                    <div class="section-playlist__content">
                        <span class="text title">Crie sua primeira playlist</span>
                        <span class="text subtitle">É fácil, vamos te ajudar.</span>
                        <button class="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <div class="cookies">
                    <a href="#cookies">Cookies</a>
                </div>
                <div class="languages">
                    <button class="languages__button">
                        <span><FontAwesomeIcon icon={faGlobe}/></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;