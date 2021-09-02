import React from "react";
import { NavLink } from "react-router-dom";
import { BiFilm } from "react-icons/bi";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="sideBar">
      <div>
        <NavLink exact to="/" activeClassName="navActive">
          <BiFilm />
          <span className="sideLinks">Acueil</span>
          <br />
          <br />
        </NavLink>

        <NavLink exact to="/lastseen" activeClassName="navActive">
          <BiFilm />
          <span className="sideLinks">last seen movies</span>
          <br />
          <br />
        </NavLink>

        <NavLink exact to="/new" activeClassName="navActive">
          {/* <i className= "BiFilm"></i> */}
          <BiFilm />
          <span className="sideLinks">new movies</span>
          <br />
          <br />
        </NavLink>
      </div>
      <div className="inf">
        <h1 className="bie">Bienvenu movies</h1>
        <h2 className="top">
          by ELMASRY
          <br />
          Mohamed
        </h2>

        <h3> regarde des films gratuit</h3>
      </div>
    </div>
  );
};

export default Navigation;
