import { useEffect, useRef, useState } from "react";
import { CursorPointer, Preloader } from "../atoms";
import { MenuHeader } from "../molecules";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;

export const Header = () => {
  const navBarRef = useRef<HTMLElement>(null);

  const [logo, setLogo] = useState("src/assets/img/logo.png");

  const handlerScroll = () => {
    const bodyScroll = window.pageYOffset;
    if (bodyScroll > 100) {
      (navBarRef.current as unknown as any).className =
        "navbar navbar-expand-lg nav-scroll";
      setLogo("src/assets/img/logo-light.png");
    } else {
      (navBarRef.current as unknown as any).className =
        "navbar navbar-expand-lg";
      setLogo("src/assets/img/logo.png");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);

    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);
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
                    <a>
                      <span className="flaticon-maps-and-flags"></span>Envigado
                      - Antioquia
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="flaticon-phone-call"></span>+57
                      3014854669
                    </a>
                  </li>
                </ul>
              </div>
              <div className="top-right clearfix">
                <ul className="links clearfix">
                  <li>
                    <span className="footer-contact-mail"></span>
                    monicahenaops@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Navbar --> */}
      <nav ref={navBarRef} className="navbar navbar-expand-lg">
        <div className="container">
          {/* <!-- Logo --> */}
          <div className="logo-wrapper">
            <a className="logo" href="index.html">
              <img src={logo} className="logo-img" alt="" />
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
