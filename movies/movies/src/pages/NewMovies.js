import React from "react";
import Navigation from "../components/Navigation";
import "./NewMovies.css";
import ListFilm from "../components/ListFilm";

const NewMovies = () => {
  return (
    <div className="new">
      <div className="nav">
        <Navigation />
      </div>
      <div className="wel">
        Consultez les nouveaux films
        <ListFilm />
      </div>
    </div>
  );
};

export default NewMovies;
