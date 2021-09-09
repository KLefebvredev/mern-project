import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to="/" exact activeClassName="active-left-nav">
            <img src="./img/icons/home.svg" alt="Icon de navigation HomePage"/>
          </NavLink>
          <br />
          <NavLink to="/recette" exact activeClassName="active-left-nav">
            <img src="./img/icons/book.svg" alt="Icon vers la page recette" />
          </NavLink>
          <NavLink to="/trending" exact activeClassName="active-left-nav">
            <img
              src="./img/icons/rocket.svg"
              alt="Icon de navigation Trending"
            />
          </NavLink>
          <br />
          <NavLink to="/profil" exact activeClassName="active-left-nav">
            <img src="./img/icons/user.svg" alt="Icon de navigation Profil" />
          </NavLink>
          <br />
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
