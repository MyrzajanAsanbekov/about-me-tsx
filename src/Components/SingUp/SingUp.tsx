import React, { useState } from "react";
import "./SingUp.css";
import { Link, useNavigate } from "react-router-dom";
import { SlLogout } from "react-icons/sl";

const SingUp = () => {
  const nav = useNavigate();
  const [isloading, setisLoading] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      nav("/");
    }, 2000);
  };
  return (
    <div className="singupp">
      <div className="container">
        <div className="singupp">
          {isloading ? (
            <div className="loader"></div>
          ) : (
            <div className="singupp-modal">
              <div className="singup-inputs">
                <span onClick={() => nav("/")}>
                  <SlLogout />
                </span>
                <h1>Sing Up</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button onClick={handleClick}>Sing Up</button>
                <Link to={"/login"}>Login</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingUp;
