import { CursorPointer, Preloader } from "../atoms";
import { MenuHeader } from "../molecules";

export const Header = () => {
  return (
    <>
      <Preloader />
      <CursorPointer />
      {/* <!-- Top Navbar --> */}
      <header className="main-header">
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
                    <a href="tel:+573014854669">
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
      </header>
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
          <MenuHeader />
        </div>
      </nav>
    </>
  );
};
