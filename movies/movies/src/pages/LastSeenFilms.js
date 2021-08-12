import React from 'react';
import Navigation from '../components/Navigation';
import './LastSeenFilms.css'
import ListMoviesDefinitions from '../components/ListMoviesDefinitions';
const LastSeenFilms = () => {
    return (
        
        <div className="lstsn"> 
            <Navigation/>
            <div className = "welcome">
             Bienvenu dans la page des derniers films vus
            <ListMoviesDefinitions className="def"/>
            </div>
           
        </div>
    );
};

export default LastSeenFilms;