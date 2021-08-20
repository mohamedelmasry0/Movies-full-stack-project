import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SettingsIcon from "@material-ui/icons/Settings";
import { useStateValue } from "../StateProvider";
import { auth } from "../fireBase";

const Header = () => {
  const [{ seen, user }] = useStateValue();
  const signingOut = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <a href="/">
        <img src="./media/images.jpg" alt="" className="header_logo" />
      </a>
      <div className="searchBar">
        <input className="enterSearch" type={Text} />
        <SearchIcon className="searchYes" />
      </div>
      <div className="searchBacket">
        <VisibilityIcon className="searchYes" />

        <div className="numSeen">{seen?.length}</div>
      </div>
      <div className="header_nav">
        <div className="sign">
          <span>
            Hello guest<br></br>
            <div onClick={signingOut}>
              <a href="/login" className="logLink">
                {user ? "sign out" : "sign in"}
              </a>
            </div>
          </span>
        </div>
        <div className="category">
          <span>Category</span>
        </div>
        <div className="country">
          <span>Country</span>
        </div>
        <div className="bin"></div>
      </div>
      <div className="cart">
        <SettingsIcon className="cartIcon" />
      </div>
    </div>
  );
};

export default Header;
