import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación simple (sin backend)
    if (correo && contrasena) {
      // Guardar sesión en localStorage
      localStorage.setItem('usuario', correo);
      
      // Redirigir a fundaciones
      navigate('/fundaciones');
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="logo-section">
          <div className="logo-icon">
            <span className="icon-blue">●</span>
            <span className="icon-yellow">●</span>
            <span className="icon-orange">●</span>
          </div>
        </div>

        <h2>Bienvenidos</h2>

        <div className="form-group">
          <label>Correo</label>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-ingresar">
          Ingresar
        </button>

        <p className="registro-link">
          ¿No tienes cuenta? <a href="/registro">Regístrate</a>
        </p>
      </form>
    </div>
  );
};

export default Login;