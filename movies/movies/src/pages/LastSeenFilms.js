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
      <div className="welcome">
        Bienvenu dans la page des derniers films vus
        {/* <ListMoviesDefinitions className="def" /> */}
      </div>
      <ul className="seen">
        {seen.map((item) => (
          <li className>
            <SeenFilm
              link={item.link}
              imageFilm={item.imageFilm}
              title={item.title}
              year={item.year}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LastSeenFilms;
