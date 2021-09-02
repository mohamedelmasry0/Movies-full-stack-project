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
      <h1 className="consulte">Consultez les nouveaux films</h1>

      <div className="wel">
        <br />
        <br />
        <ListFilm />
      </div>
    </div>
  );
};

export default NewMovies;
