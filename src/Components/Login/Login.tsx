import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { SlLogout } from "react-icons/sl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Бардык талааларды толтуруңуз!", { position: "top-right" });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Паролдор дал келбейт!", { position: "top-right" });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log("Форма жүктөлдү:", { name, email, password });
      toast.success("Форма ийгиликтүү жүктөлдү!", { position: "top-right" });
      nav("/");
    }, 2000);
  };

  return (
    <>
      <ToastContainer />
      <div className="logins">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="logins">
              {isLoading ? (
                <div className="loader"></div>
              ) : (
                <div className="logins-modal">
                  <span onClick={() => nav("/")}>
                    <SlLogout />
                  </span>
                  <div className="logins-inputs">
                    <h1>Login</h1>
                    <input
                      placeholder="Your Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                    <Link to={"/signup"}>Sign Up</Link>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
