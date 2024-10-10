import React from "react";
import "./Home.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  const location = useLocation();
  if (location.pathname === "/login") {
    return null;
  } else if (location.pathname === "/singup") {
    return null;
  }

  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home-nav">
            <h1 onClick={() => nav("/")}>About Me</h1>
            <Link to={"/story"}>Story</Link>
            <Link to={"project"}>Project</Link>
            <div className="btn">
              <button className="login" onClick={() => nav("/login")}>
                Login
              </button>
              <button className="singup" onClick={() => nav("/singup")}>
                Sing Up
              </button>
            </div>
          </div>
          <div className="home-text">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, et?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
