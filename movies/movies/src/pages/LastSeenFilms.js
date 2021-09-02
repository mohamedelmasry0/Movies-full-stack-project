import React from "react";
import Navigation from "../components/Navigation";
import "./LastSeenFilms.css";

import { useStateValue } from "../StateProvider";
import SeenFilm from "../components/SeenFilm";

function LastSeenFilms() {
  const [{ seen }] = useStateValue();
  return (
    <div className="lstsn">
      <Navigation />
      <h1 className="welcome">
        Bienvenu dans la page des derniers films vus
        {/* <ListMoviesDefinitions className="def" /> */}
      </h1>
      <div className="seenn">
        <ul className>
          {seen.map((item) => (
            <li className>
              <SeenFilm
                className
                link={item.link}
                imageFilm={item.imageFilm}
                title={item.title}
                year={item.year}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LastSeenFilms;
