import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (correo && contrasena) {
      navigate('/fundaciones');
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'auto'
    }}>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { 
              transform: translateY(0); 
            }
            50% { 
              transform: translateY(-10px); 
            }
          }
          
          .icon-bounce-1 {
            animation: bounce 2s infinite;
          }
          
          .icon-bounce-2 {
            animation: bounce 2s infinite 0.2s;
          }
          
          .icon-bounce-3 {
            animation: bounce 2s infinite 0.4s;
          }
        `}
      </style>

      <form onSubmit={handleLogin} style={{
        background: 'white',
        padding: '2.5rem',
        borderRadius: '20px',
        boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
        width: '90%',
        maxWidth: '500px',
        margin: '2rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ 
            fontSize: '4rem', 
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <span className="icon-bounce-1" style={{ color: '#4A90E2', display: 'inline-block' }}>●</span>
            <span className="icon-bounce-2" style={{ color: '#F5A623', display: 'inline-block' }}>●</span>
            <span className="icon-bounce-3" style={{ color: '#E87854', display: 'inline-block' }}>●</span>
          </div>
          <h1 style={{ margin: '0.5rem 0', color: '#333', fontSize: '2.5rem' }}>NON PROFIT</h1>
          <p style={{ color: '#666', fontSize: '1rem', letterSpacing: '2px' }}>CONECTANDO COMUNIDAD</p>
        </div>

        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333', fontSize: '1.8rem' }}>Bienvenidos</h2>

        <div style={{ marginBottom: '1.3rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontSize: '1rem', fontWeight: '500' }}>Correo</label>
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required 
            style={{ 
              width: '100%', 
              padding: '1rem', 
              border: '2px solid #ddd',
              borderRadius: '10px',
              fontSize: '1rem',
              boxSizing: 'border-box',
              transition: 'border 0.3s ease'
            }} 
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontSize: '1rem', fontWeight: '500' }}>Contraseña</label>
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required 
            style={{ 
              width: '100%', 
              padding: '1rem', 
              border: '2px solid #ddd',
              borderRadius: '10px',
              fontSize: '1rem',
              boxSizing: 'border-box',
              transition: 'border 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <button 
    type="submit" 
style={{ 
  width: 'auto',
  padding: '1rem 2.5rem',  /* ← Menos padding */
  background: '#667eea', 
  color: 'white', 
  border: 'none', 
  borderRadius: '10px', 
  fontSize: '1.1rem',  /* ← Texto un poco más pequeño */
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
}}
    onMouseOver={(e) => {
      e.target.style.background = '#764ba2';
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 6px 20px rgba(118, 75, 162, 0.4)';
    }}
    onMouseOut={(e) => {
      e.target.style.background = '#667eea';
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
    }}
  >
    Ingresar
  </button>
</div>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#666', fontSize: '0.95rem' }}>
          ¿No tienes cuenta? <a href="/registro" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>Regístrate</a>
        </p>
      </form>
    </div>
  );
};

export default Login;