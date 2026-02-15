import { useState } from 'react';
import './FundacionesLista.css';

const FundacionesLista = () => {
  const [filtro, setFiltro] = useState('');
  
  // Datos de ejemplo de fundaciones
  const fundaciones = [
    {
      id: 1,
      nombre: "Fundación Niños del Futuro",
      descripcion: "Dedicados a brindar educación y alimentación a niños en situación de vulnerabilidad.",
      emoji: "👶",
      direccion: "Calle 45 #23-10, Bogotá",
      telefono: "+57 312 456 7890",
      email: "contacto@ninosfuturo.org",
      sitio_web: "www.ninosfuturo.org"
    },
    {
      id: 2,
      nombre: "Fundación Corazón Solidario",
      descripcion: "Apoyo integral a familias de bajos recursos con programas de salud y vivienda.",
      emoji: "❤️",
      direccion: "Carrera 15 #67-89, Medellín",
      telefono: "+57 315 789 1234",
      email: "info@corazonsolidario.org",
      sitio_web: "www.corazonsolidario.org"
    },
    {
      id: 3,
      nombre: "Fundación Manos Unidas",
      descripcion: "Construcción de escuelas y centros comunitarios en zonas rurales de Colombia.",
      emoji: "🤝",
      direccion: "Avenida 10 #34-56, Cali",
      telefono: "+57 318 234 5678",
      email: "hola@manosunidas.org",
      sitio_web: "www.manosunidas.org"
    },
    {
      id: 4,
      nombre: "Fundación Salud para Todos",
      descripcion: "Atención médica gratuita y programas de prevención en comunidades marginadas.",
      emoji: "🏥",
      direccion: "Calle 80 #12-34, Barranquilla",
      telefono: "+57 320 567 8901",
      email: "contacto@saludparatodos.org",
      sitio_web: "www.saludparatodos.org"
    },
    {
      id: 5,
      nombre: "Fundación Esperanza Verde",
      descripcion: "Proyectos ambientales y educación ecológica para la conservación del planeta.",
      emoji: "🌱",
      direccion: "Carrera 7 #45-23, Cartagena",
      telefono: "+57 311 890 1234",
      email: "info@esperanzaverde.org",
      sitio_web: "www.esperanzaverde.org"
    },
    {
      id: 6,
      nombre: "Fundación Refugio Animal",
      descripcion: "Rescate, rehabilitación y adopción responsable de animales en situación de calle.",
      emoji: "🐾",
      direccion: "Calle 123 #45-67, Bucaramanga",
      telefono: "+57 314 678 9012",
      email: "ayuda@refugioanimal.org",
      sitio_web: "www.refugioanimal.org"
    }
  ];

  const fundacionesFiltradas = fundaciones.filter(f =>
    f.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    f.descripcion.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="fundaciones-container">
      <header className="fundaciones-header">
        <div className="logo-non-profit">
          <div className="logo-icon">
            <span className="icon-blue">●</span>
            <span className="icon-yellow">●</span>
            <span className="icon-orange">●</span>
          </div>
          <h1>NON PROFIT</h1>
          <p>CONECTANDO COMUNIDAD</p>
        </div>
        
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Buscar fundación por nombre o causa..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>

        <p className="subtitulo">Encuentra la fundación que quieres apoyar</p>
      </header>

      <div className="fundaciones-grid">
        {fundacionesFiltradas.map((fundacion) => (
          <div key={fundacion.id} className="fundacion-card">
            <div className="fundacion-imagen">
              <div className="emoji-container">
                {fundacion.emoji}
              </div>
              <div className="fundacion-overlay">
                <button className="btn-donar">
                  ❤️ Donar Ahora
                </button>
              </div>
            </div>
            
            <div className="fundacion-info">
              <h3 className="fundacion-nombre">{fundacion.nombre}</h3>
              <p className="fundacion-descripcion">{fundacion.descripcion}</p>
              
              <div className="fundacion-contacto">
                <div className="contacto-item">
                  <span className="icono">📍</span>
                  <span>{fundacion.direccion}</span>
                </div>
                <div className="contacto-item">
                  <span className="icono">📞</span>
                  <span>{fundacion.telefono}</span>
                </div>
                <div className="contacto-item">
                  <span className="icono">✉️</span>
                  <span>{fundacion.email}</span>
                </div>
                <div className="contacto-item">
                  <span className="icono">🌐</span>
                  <a href={`https://${fundacion.sitio_web}`} target="_blank" rel="noopener noreferrer">
                    {fundacion.sitio_web}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {fundacionesFiltradas.length === 0 && (
        <div className="no-resultados">
          <p>😔 No se encontraron fundaciones con ese criterio</p>
          <button onClick={() => setFiltro('')} className="btn-limpiar">
            Limpiar búsqueda
          </button>
        </div>
      )}
    </div>
  );
};

export default FundacionesLista;