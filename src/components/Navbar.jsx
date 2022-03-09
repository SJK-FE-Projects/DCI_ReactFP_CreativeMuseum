import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App";
import { getAuth, signOut } from "firebase/auth";
import "./Navbar.scss";
import "../App.scss";
import Plus from "../posts/img/plus.svg";
import Logo from "../posts/img/logo.svg";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(Context);

  const location = useLocation();

  const logout = () => {
    const auth = getAuth();
    signOut(auth);
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  return (
    <div className="header-wrapper">
      <NavLink to="/" className="logo">
        <img src={Logo} />
      </NavLink>

      {currentUser ? (
        <NavLink to="/create" className="plus-for-post">
          <img src={Plus} />{" "}
        </NavLink>
      ) : null}

      <div className="hamburger-menu"></div>

      {currentUser ? (
        <NavLink to="/login" onClick={logout} className="logout-button">
          Logout
        </NavLink>
      ) : null}

      {!currentUser && location.pathname!="/login" ? (
        <NavLink to="/login" className="logout-button">
          Anmelden
        </NavLink>
      ) : null}
       {!currentUser && location.pathname!="/register" ? (
        <NavLink to="/register" className="logout-button">
          Registrieren
        </NavLink>
      ) : null}
    </div>
  );
};
export default Navbar;
