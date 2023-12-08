export const AboutHome = () => {
  return (
    <section className="about section-padding" data-scroll-index="1">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 mb-30 animate-box"
            data-animate-effect="fadeInUp"
          >
            <div className="section-head mb-20">
              <div className="section-subtitle">Acerca de Monica Henao</div>
              <div className="section-title">
                Encuentra tu estilo <span>Conmigo</span>
              </div>
            </div>
            <p>
              En un mundo acelerado y lleno de opciones, descubrir y expresar
              nuestro estilo personal puede ser un desafío. La moda es una forma
              de arte que nos permite presentarnos al mundo de manera única,
              pero a veces, navegar por las tendencias y seleccionar prendas que
              se adapten a nuestra personalidad puede resultar abrumador. En
              este escenario, contar con un personal shopper emerge como una
              valiosa herramienta para explorar y potenciar nuestro estilo
              individual. Yo no solo te ayudar a elegir la ropa; voy a
              descubrir tu identidad a través de la moda.
            </p>
            <ul className="about-list list-unstyled mb-20">
              <li>
                <div className="about-list-icon">
                  <span className="ti-check"></span>
                </div>
                <div className="about-list-text">
                  <p>Presupuesto a tu capacidad monetaria.</p>
                </div>
              </li>
              <li>
                <div className="about-list-icon">
                  <span className="ti-check"></span>
                </div>
                <div className="about-list-text">
                  <p>Consultoría personalizada y confiable.</p>
                </div>
              </li>
              <li>
                <div className="about-list-icon">
                  <span className="ti-check"></span>
                </div>
                <div className="about-list-text">
                  <p>Clientes satisfechos.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
            <div className="row img-twice position-relative h-100">
              <div className="col-6 animate-box" data-animate-effect="fadeInUp">
                <img className="img-fluid" src="src/assets/img/foto1.jpg" alt="" />
              </div>
              <div
                className="col-6 align-self-end animate-box"
                data-animate-effect="fadeInUp"
              >
                <img className="img-fluid" src="src/assets/img/foto2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
