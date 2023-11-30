export const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="footer">
        {/* <!-- footer second --> */}
        <div className="footer-second">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-column footer-contact">
                  <h3 className="footer-title">Contacto</h3>
                  <p className="footer-contact-text">
                    Envigado - Antioquia
                    <br />
                    Colombia
                  </p>
                  <div className="footer-contact-info">
                    <p className="footer-contact-phone">
                      <span className="flaticon-phone-call"></span> +57 3014854669
                    </p>
                    <p className="footer-contact-mail">monicahenaops@gmail.com</p>
                  </div>
                  <div className="footer-about-social-list">
                    <a href="#">
                      <i className="ti-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="ti-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="ti-youtube"></i>
                    </a>
                    <a href="#">
                      <i className="ti-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="ti-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-column footer-explore clearfix">
                  <h3 className="footer-title">Mis Servicios</h3>
                  <ul className="footer-explore-list list-unstyled">
                    <li>
                      <a href="#">Personal Shopping</a>
                    </li>
                    <li>
                      <a href="#">Revisión de tu closet</a>
                    </li>
                    <li>
                      <a href="#">Qué empacar en tu viaje</a>
                    </li>
                    <li>
                      <a href="#">Asesoría para hombres</a>
                    </li>
                    <li>
                      <a href="#">Ocaciones Especiales</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-column footer-explore clearfix">
                  <h3 className="footer-title">Suscríbete</h3>
                  <div className="row subscribe">
                    <div className="col-md-12">
                      <p>
                        Suscríbete para recibir nuevas actualizaciones y promociones.
                      </p>
                      <form>
                        <input
                          type="text"
                          name="search"
                          placeholder="Tu email"
                          required
                        />
                        <button>Suscríbete</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom --> */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-bottom-inner">
                  <p className="footer-bottom-copy-right">
                    2023 © All rights reserved. Designed by
                    <a
                      href="https://1.envato.market/DuruThemes"
                      target="_blank"
                    >
                      DuruThemes
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
