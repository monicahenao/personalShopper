import { Image3, Image4, Image5, Image6, Image7, Image9 } from "../assets";
import { AppointmentForm } from "../components/organisms";

export const MyServices = () => {
  return (
    <>
      <a href={`/services`} />
      {/* <!-- Header Banner --> */}
      <div
        className="banner-header valign bg-img bg-fixed"
        data-overlay-dark="4"
        data-background={Image9}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-end caption">
              <h1>Mis Servicios</h1>
              <h5>¿Cómo te ayudo?</h5>
            </div>
          </div>
        </div>
      </div>
      <section className="services section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 mb-90 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="item right">
                <figure>
                  <img src={Image3} alt="" className="img-fluid" />
                </figure>
                <div className="caption padding-left">
                  <div className="title">Personal Shopping</div>
                  <p>
                    En nuestra rutina diaria, el tiempo es un recurso valioso.
                    Yo tomo la responsabilidad de investigar las tendencias,
                    explorar tiendas y seleccionar opciones que se ajusten a tus
                    preferencias y necesidades. Esto no solo ahorra tiempo, sino
                    también tu energía. Cada persona es única, al igual que su
                    estilo. Voy a trabajar contigo para comprender tu cuerpo y
                    tu personalidad, y así seleccionar prendas que resalten lo
                    mejor de ti. La ropa no solo se trata de seguir tendencias,
                    sino de expresar quién eres. La confidencialidad es uno de
                    nuestros pilares, mantener la información segura tuya es de
                    vital importancia.
                  </p>
                  <a href={`/contact`} className="button-1">
                    Contáctame<span></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-12 mb-90 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="item">
                <figure>
                  <img src={Image4} alt="" className="img-fluid" />
                </figure>
                <div className="caption padding-left">
                  <div className="title">Revisión de tu closet</div>
                  <p>
                    Examiremos tu closet, revisando prendas, accesorios y
                    calzado. Se identificarán las piezas clave, los elementos
                    favoritos y aquellas prendas que ya no cumplen con las
                    expectativas tuyas. Analizaré tu estilo actual y buscaremos
                    comprender cómo las prendas en el closet reflejan tu
                    personalidad y estilo de vida. En colaboración conjunta,
                    decidiremos qué prendas mantener, cuáles donar o descartar y
                    cuáles podrían necesitar reparaciones o modificaciones.
                    Organizaremos el closet de manera eficiente para facilitar
                    la visualización y el acceso a las prendas. Crearemos
                    conjuntos con las prendas existentes para mostrarte nuevas
                    formas de usar lo que ya posees. Y porque no? comprar
                    prendas basicas que te esten faltando en tu closet
                  </p>
                  <a href={`/contact`} className="button-1">
                    Contáctame<span></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-12 mb-90 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="item right">
                <figure>
                  <img src={Image5} alt="" className="img-fluid" />
                </figure>
                <div className="caption padding-left">
                  <div className="title">Qué llevar en tu viaje</div>
                  <p>
                    Con este servicio para la planificación de un viaje, vamos a
                    empacar de manera eficiente y asegurarnos de que lleves
                    consigo prendas versátiles y apropiadas para todas las
                    ocasiones previstas. Comprenderemos el proposito del viaje,
                    duración, eventos, clima del destino, para asegurarnos que
                    no se te pase nada. Verificaremos tu closet para realizar
                    conjuntos versátiles y así combinar atuendos, tecnicas de
                    empacado eficiente y en caso de que sea necesario comprar
                    algo adicional para estar preparados para el viaje.
                  </p>
                  <a href={`/contact`} className="button-1">
                    Contáctame<span></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-12 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="item">
                <figure>
                  <img src={Image6} alt="" className="img-fluid" />
                </figure>
                <div className="caption padding-left">
                  <div className="title">Asesoría para hombres</div>
                  <p>
                    La moda no es exclusiva solo para las mujeres, un papel muy
                    importante tambien es el del hombre por eso en esta asesoría
                    brindaré orientación y asistencia en la selección de prendas
                    y accesorios que se adapten a tu estilo personal,
                    necesidades y ocasiones específicas. Identificaremos
                    elementos que te gusten y aquellas áreas donde podrías estar
                    interesado en realizar cambios. Proporcionaré consejos sobre
                    cómo combinar prendas y accesorios de manera creativa para
                    crear looks frescos y atractivos donde se adapten a tus
                    necesidades prácticas, reflejen tu personalidad y estilo de
                    vida, permitiendote sentirte seguro y cómodo en todas las
                    ocasiones.
                  </p>
                  <a href={`/contact`} className="button-1">
                    Contáctame<span></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-12 mt-90 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="item right">
                <figure>
                  <img src={Image7} alt="" className="img-fluid" />
                </figure>
                <div className="caption padding-left">
                  <div className="title">Ocasiones Especiales</div>
                  <p>
                    No todos los días hay ocasiones especiales, son una
                    oportunidad para hacer el mejor recuerdo posible, por eso
                    para una ocasión especial implica un enfoque más específico
                    y detallado para garantizar que tu luzcas de la mejor manera
                    posible en un evento particular. Comprenderemos la ocasión
                    especial, el código de vestimenta, tus gustos, preferencias
                    y cualquier otra consideración relevante. Para que te
                    sientas segura de llevar el look que más te favorezca,
                    prestando especial atención a la selección de accesorios,
                    como joyería, relojes y bolsos, para garantizar que
                    complementen y realcen tu atuendo.
                  </p>
                  <a href={`/contact`} className="button-1">
                    Contáctame<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppointmentForm />
    </>
  );
};
