import React from "react";
import "./Film.css";
import { useStateValue } from "../StateProvider";

const Film = ({ imageFilm, title, year, link }) => {
  const [disable, setDisable] = React.useState(false);
  const [, dispatch] = useStateValue();
  const seenBefore = () => {
    setDisable(true);
    dispatch({
      type: "SEEN",
      item: {
        imageFilm: imageFilm,
        title: title,
        year: year,
        link: link,
      },
    });
  };

  return (
    <div className="film">
      <a href={link}>
        <img on src={imageFilm} alt="" />
        <div className="spefi">
          <h2 className="title">{title}</h2>
          <div className="year">{year}</div>
        </div>
      </a>
      <button disabled={disable} onClick={seenBefore} id="buttt">
        Seen{" "}
      </button>
    </div>
  );
};

export default Film;
