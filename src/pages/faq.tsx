import { Image12 } from "../assets";
import { AppointmentForm } from "../components/organisms";

export const Faq = () => {
  return (
    <>
      <a href={`/faq`} />
      {/* <!-- Header Banner --> */}
      <div
        className="banner-header valign bg-img bg-fixed"
        data-overlay-dark="3"
        data-background={Image12}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-end caption">
              <h1>
                Preguntas <span>Frecuentes</span>
              </h1>
              <h5>Preguntas y respuestas frecuentes</h5>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- Faqs -->  */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="accordion-box clearfix">
                <li className="accordion block">
                  <div className="acc-btn size-20">
                    ¿En qué consiste exactamente el servicio de personal
                    shopper?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Un personal shopper es un profesional que te ayuda a
                        seleccionar ropa y accesorios según tu estilo,
                        preferencias y necesidades específicas. Además, puede
                        asistirte en la toma de decisiones de moda y compras.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn size-20">
                    ¿Cómo funciona el proceso de trabajo?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Comenzamos con una consulta para entender tu estilo,
                        tallas, colores preferidos y ocasiones para las que
                        necesitas ropa. Luego, selecciono opciones y organizo
                        sesiones de compras o presento sugerencias en línea.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn size-20">
                    ¿Qué tipos de servicios ofreces?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Ofrezco servicios que van desde acompañarte en sesiones
                        de compras personales hasta seleccionar y enviar
                        opciones en línea. También puedo ayudarte a armar
                        outfits, hacer revisiones de guardarropa, y más.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn size-20">
                    ¿Trabajas con un presupuesto específico?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Sí, siempre tengo en cuenta tu presupuesto y procuro
                        encontrar opciones que se ajusten a él. La idea es
                        maximizar el valor de cada compra.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="accordion-box clearfix">
                <li className="accordion block">
                  <div className="acc-btn size-20">
                    ¿Puedes ayudarme a encontrar ropa para eventos específicos o
                    situaciones especiales?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        ¡Claro! Ya sea para eventos formales, informales, o
                        incluso para actualizar tu guardarropa diario, estoy
                        aquí para adaptarme a tus necesidades.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn size-20">
                    ¿Cómo determinas mi estilo personal?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Realizo preguntas detalladas sobre tus preferencias,
                        reviso tus prendas favoritas, y también considero tu
                        estilo de vida y actividades cotidianas para entender tu
                        estilo único.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn size-20">
                    ¿Trabajas con clientes que tienen limitaciones de tiempo?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Absolutamente. Entiendo que el tiempo puede ser un
                        factor limitante, y adapto mis servicios para satisfacer
                        tus necesidades y horarios.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn size-20">
                    ¿Cómo manejas la confidencialidad y privacidad de la
                    información del cliente?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        La confidencialidad es primordial. Tu información y
                        preferencias son tratadas con la máxima privacidad y
                        seguridad. Nunca comparto detalles sin tu
                        consentimiento.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <AppointmentForm />
    </>
  );
};
