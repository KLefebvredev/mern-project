import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/icon.png" alt="Icon du site Raccoont" />
              <h3>Raccoont</h3>
            </div>
          </NavLink>
        </div>

        {uid ? (
          <ul>
            <li></li>
            <li className="img-navbar">
              <NavLink exact to="/profil">
                <img src={userData.picture} alt="Photo de profil de" />
              </NavLink>
            </li>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5>Bienvenue {userData.pseudo}</h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <img
                  src="./img/icons/login.svg"
                  alt="Logo permettant de s'enregistrer"
                />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
