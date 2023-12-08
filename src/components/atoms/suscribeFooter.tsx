export const SuscribeFooter = () => {
  return (
    <div className="footer-column footer-explore clearfix">
      <h3 className="footer-title">Suscríbete</h3>
      <div className="row subscribe">
        <div className="col-md-12">
          <p>Suscríbete para recibir nuevas actualizaciones y promociones.</p>
          <form>
            <input type="text" name="search" placeholder="Tu email" required />
            <button>Suscríbete</button>
          </form>
        </div>
      </div>
    </div>
  );
};
