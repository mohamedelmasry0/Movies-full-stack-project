import React from "react";

const FilmInList = ({ imageFilm, title }) => {
  return (
    <div>
      <img src={imageFilm} alt="" />
      <div className="spefi">
        <h2 className="title">{title}</h2>
      </div>
    </div>
  );
};

export default FilmInList;
