import React, { useState } from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.3/mercadolibre/logo__small.png"
        />
      </Link>

      <div className="register__option">
        <Link to="/register">
          <span className="header__optionRegister">Creat your account</span>
        </Link>

        <Link to="/">
          <span className="header__optionHome">Volver</span>
        </Link>

        <div className="login__container">
          <h2>
            Hello! To continue, enter your email and password
          </h2>

          <form>
            <h5>Email</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
