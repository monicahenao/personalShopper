export const MenuHeader = () => {
  return (
    <section className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" href="index.html">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about.html">
            Personal Shopping
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="services.html">
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
            Pages <i className="ti-angle-down"></i>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="pricing.html" className="dropdown-item">
                <span>Pricing</span>
              </a>
            </li>
            <li>
              <a href="gallery.html" className="dropdown-item">
                <span>Style Gallery</span>
              </a>
            </li>
            <li>
              <a href="faq.html" className="dropdown-item">
                <span>Faq</span>
              </a>
            </li>
            <li>
              <a href="services-page.html" className="dropdown-item">
                <span>Services Page</span>
              </a>
            </li>
            <li className="dropdown-submenu dropdown">
              <a
                className="dropdown-item dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
                href="#"
              >
                <span>
                  Other Pages <i className="ti-angle-right"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="404.html" className="dropdown-item">
                    <span>404 Page</span>
                  </a>
                </li>
                <li>
                  <a href="coming-soon.html" className="dropdown-item">
                    <span>Coming Soon</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
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
            Blog <i className="ti-angle-down"></i>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="blog.html" className="dropdown-item">
                <span>Blog 1</span>
              </a>
            </li>
            <li>
              <a href="blog2.html" className="dropdown-item">
                <span>Blog 2</span>
              </a>
            </li>
            <li>
              <a href="blog3.html" className="dropdown-item">
                <span>Blog 3</span>
              </a>
            </li>
            <li>
              <a href="post.html" className="dropdown-item">
                <span>Post Page</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html">
            Contacto
          </a>
        </li>
      </ul>
    </section>
  );
};
