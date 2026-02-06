import React from "react";
import { Link } from "react-router-dom";
import "./Registro.css";

const Registro = () => {
  return (
    <>
      <div className="registro-container">
      <form>
        <h2>Registro</h2>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre Completo" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" name="email" placeholder="Correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Contraseña" required />
        </div>
        <div className="form-group">
          <label htmlFor="role">Rol</label>
          <select id="role" name="role" required>
            <option value="voluntario">Voluntario</option>
            <option value="donante">Donante</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="text" id="telefono" name="telefono" placeholder="Teléfono" required />
        </div>
        <div>
        <button type="submit">Registrarse</button>
        <Link to="/">¿Ya tienes cuenta? Inicia sesión</Link>
        </div>
      </form>
      </div>
    </>
  );
};

export default Registro;
