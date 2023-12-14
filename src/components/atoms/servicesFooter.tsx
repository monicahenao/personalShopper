export const ServicesFooter = () => {
  return (
    <div className="footer-column footer-explore clearfix">
      <h3 className="footer-title">Mis Servicios</h3>
      <ul className="footer-explore-list list-unstyled">
        <li>
          <a href={`/services`}>Personal Shopping</a>
        </li>
        <li>
          <a href={`/services`}>Revisión de tu closet</a>
        </li>
        <li>
          <a href={`/services`}>Qué empacar en tu viaje</a>
        </li>
        <li>
          <a href={`/services`}>Asesoría para hombres</a>
        </li>
        <li>
          <a href={`/services`}>Ocasiones Especiales</a>
        </li>
      </ul>
    </div>
  );
};
