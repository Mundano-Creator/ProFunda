import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Bienvenidos</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" name="email" placeholder="Correo papoi" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Contraseña" required />
        </div>
        <button type="submit">Ingresar</button>
        <Link to="/registro">¿No tienes cuenta? Regístrate</Link>
      </form>
    </div>
  );
};

export default Login;
