import React from "react";
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form>
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
            <option value="fundacion">Fundación</option>
            <option value="voluntario">Voluntario</option>
            <option value="donante">Donante</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="text" id="telefono" name="telefono" placeholder="Teléfono" required />
        </div>
        <button type="submit">Registrarse</button>
        <Link to="/">¿Ya tienes cuenta? Inicia sesión</Link>
      </form>
    </div>
  );
};

export default Registro;
