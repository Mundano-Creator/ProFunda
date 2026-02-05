import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <form>
        <h2><center>Bienvenidos</center></h2>
        <div className="form-group">
<<<<<<< HEAD
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" name="email" placeholder="Correo papoi" required />
=======
          <label htmlFor="email">Correo</label> 
          <input type="email" id="email" name="email" placeholder="Correo electrónico" required />
>>>>>>> 82b69cb6f8e00730b2e7ca2d6aac7d501b53d008
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
  );
};

export default Login;
