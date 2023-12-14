export const MenuHeader = () => {
  return (
    <section className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" href={`/`}>
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={`/services`}>
            Mis Servicios
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            Más Contenido <i className="ti-angle-down"></i>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href={`/stylegallery`} className="dropdown-item">
                <span>Galería de Estilos</span>
              </a>
            </li>
            <li>
              <a href={`/faq`} className="dropdown-item">
                <span>Preguntas frecuentes</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={`/contact`}>
            Contacto
          </a>
        </li>
      </ul>
    </section>
  );
};
