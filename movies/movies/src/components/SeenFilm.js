import React from "react";
import { useStateValue } from "../StateProvider";

import "./SeenFilm.css";

function SeenFilm({ link, imageFilm, title, year }) {
  const [, dispatch] = useStateValue(); //here for removing only
  const unseen = () => {
    dispatch({
      type: "UNSEEN",
      title: title,
    });
  };
  return (
    <div className="filmm">
      <a href={link}>
        <img src={imageFilm} alt="" />
        <div className="spefi">
          <h2 className="title">{title}</h2>
          <div className="year">{year}</div>
        </div>
      </a>
      <button onClick={unseen}>Remove from seen list</button>
    </div>
  );
}

export default SeenFilm;
