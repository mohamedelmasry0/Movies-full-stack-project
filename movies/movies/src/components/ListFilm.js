import React from "react";
import { useState, useEffect } from "react";
import axios from "../axios";
// import FilmInList from "./FilmInList";

import "./ListFilm.css";
function ListFilm() {
  const [film, setFilm] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("api/film");
      setFilm(req.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>List films</h1>
      {/* <ul className="data"> */}
      {/* <ul> */}
      <div>
        {film.map((filmMap) => (
          <li key={filmMap._id}>
            <div className="title">{filmMap.name}</div>
            <img src={filmMap.link} alt="" />
          </li>
          // <FilmInList
          //   className="dfv"
          //   title={filmMap.title}
          //   link={filmMap.link}
          // />
        ))}

        {/* </ul> */}
      </div>
    </>
  );
}
export default ListFilm;
