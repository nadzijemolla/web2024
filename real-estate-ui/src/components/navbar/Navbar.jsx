import {useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  const { currentUser } = useContext(AuthContext);
  // if(currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo1.png" alt="" />
        </a>
        <a href="/">Home</a>
        <a href="/">About us</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/profile.jpg"}
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className=""></div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <div className="user">
            <a href="/login">Sign in</a>
            <Link to="/register" className="profile">
              <div className=""></div>
              <span>Sing up</span>
            </Link>
            </div>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
        <a href="/">Home</a>
        <a href="/">About us</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
          <a href="/login">Sign in</a>
          <a href="/register">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;