import { ContactFooter,FooterBottom,ServicesFooter, SuscribeFooter } from "../atoms";


export const Footer = () => {
  return (
    <footer className="footer">
      {/* <!-- footer second --> */}
      <div className="footer-second">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ContactFooter />
            </div>
            <div className="col-md-4">
              <ServicesFooter />
            </div>
            <div className="col-md-4">
              <SuscribeFooter />
            </div>
          </div>
        </div>
      </div>
      <FooterBottom/>
    </footer>
  );
};
