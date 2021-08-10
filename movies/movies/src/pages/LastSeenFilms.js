import React from 'react';
import Navigation from '../components/Navigation';
import './LastSeenFilms.css'

const LastSeenFilms = () => {
    return (
        
        <div className="lstsn"> 
            <Navigation/>
            <div className = "welcome">
            Bienvenu dans la page des derniers films vus
            </div>
        </div>
    );
};

export default LastSeenFilms;