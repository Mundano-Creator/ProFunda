import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <form>
          <h2><center>Bienvenidos</center></h2>
          <div className="form-group">
            <label htmlFor="email">Correo</label> 
            <input type="email" id="email" name="email" placeholder="Correo electrónico" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="Contraseña" required />
          </div>
          <div className="form-actions">
            <button type="submit">Ingresar</button>
            <Link to="/registro">¿No tienes cuenta? Regístrate</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
