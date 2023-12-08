export const ContactFooter = () => {
  return (
    <footer className="footer-column footer-contact">
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
    </footer>
  );
};
