import React from 'react';
import "./Film.css";
const film = ({imageFilm, title, year}) => {
    
    return (
        <div className="film">
            <img src={imageFilm}/>
            <div className="spefi">
                <h2 className="title">
                    {title}
                </h2>
                <div className="year">
                    {year}
                </div>
            </div>
        </div>
    );
};

export default film;