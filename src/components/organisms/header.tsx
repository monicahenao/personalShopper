import { CursorPointer, Preloader } from "../atoms";

export const Header = () => {
  return (
    <>
      <Preloader />
      <CursorPointer />
      {/* <!-- Top Navbar --> */}
      <div className="main-header">
        <div className="header-top">
          <div className="container">
            <div className="top-outer clearfix">
              <div className="top-left">
                <ul className="links clearfix">
                  <li>
                    <a href="#0">
                      <span className="flaticon-maps-and-flags"></span>Envigado
                      - Antioquia
                    </a>
                  </li>
                  <li>
                    <a href="tel:+8001234444">
                      <span className="flaticon-phone-call"></span>+57
                      3014854669
                    </a>
                  </li>
                </ul>
              </div>
              <div className="top-right clearfix">
                <ul className="links clearfix">
                  <li>
                    <span className="ti-time"></span>Horario : Lunes - Sábado
                    08:00 - 18:00
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* <!-- Logo --> */}
          <div className="logo-wrapper">
            <a className="logo" href="index.html">
              <img src="src/assets/img/logo.png" className="logo-img" alt="" />
            </a>
          </div>
          {/* <!-- Button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="ti-menu"></i>
            </span>
          </button>
          {/* <!-- Menu --> */}
          <div className="collapse navbar-collapse" id="navbar">
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
          </div>
        </div>
      </nav>
    </>
  );
};
