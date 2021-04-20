import React, { useState } from "react";
import "../Styles/Register.css";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.3/mercadolibre/logo__small.png"
        />
      </Link>

      <div className="login__option">
        <Link to="/login">
          <span className="header__optionLogin">Iniciar Sesion</span>
        </Link>

        <Link to="/">
          <span className="header__optionHome">Volver</span>
        </Link>

        <div className="register__container">
          <h2>complete your data </h2>

          <form>
            <h5>Name</h5>
            <input type="text" />

            <h5>Last Name</h5>
            <input type="text" />



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
              onClick={register}
              className="register__Button"
            >
              Creat your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
