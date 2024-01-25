import { Image11} from "../assets";
import { AppointmentForm } from "../components/organisms";

export const PrivacyPolicy = () => {
  return (
    <>
      <a href={`/privacypolicy`} />
      <div
        className="banner-header valign bg-img bg-fixed"
        data-overlay-dark="4"
        data-background={Image11}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-end caption">
              <h1>Política de Privacidad</h1>
              <h5>Nuestra política de privacidad</h5>
            </div>
          </div>
        </div>
      </div>
      <section className="about section-padding" data-scroll-index="1">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 mb-4 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="section-head mb-20">
                <div className="section-subtitle">Acerca de la política de privacidad</div>
              </div>
              <p>
                Monicahenao.com está comprometida con garantizar los derechos de
                protección de datos y evitar que tenga un uso indebido. Al
                compartir su información personal con nosotros, usted confirma
                que ha leído y aceptado los términos de esta política de
                privacidad. Monicahenao.com asume la responsabilidad por la
                información personal que recopilamos sobre usted, por lo que
                somos transparentes sobre la forma en que la manejamos. Si tiene
                alguna pregunta, comentario o inquietud sobre cualquier aspecto
                de esta política, puede contactarnos para que podamos dirigir su
                consulta a nuestro equipo.
              </p>
              <div className="section-head mb-20">
                <div className="section-title">
                Información personal
                </div>
              </div>
              <p>
                De acuerdo con lo establecido en el Decreto 1377 de 2013, que
                reglamentó parcialmente la Ley General de Protección de Datos
                Personales, Ley 1581 de 2012, para Monicahenao.com es
                un deber el manejo responsable y adecuado de las bases de datos
                suministrado por los usuarios de sus servicios digitales.
                Recopilamos su información personal para brindarle la
                información o los servicios que nos ha solicitado, mejorar
                nuestro servicio y las experiencias que usted y los usuarios del
                sitio web, esperan de nosotros.
              </p>
              <div className="section-head mb-20">
                <div className="section-title">
                Uso de información personal
                </div>
              </div>
              <p>
                Recopilamos información personal que usted comparte con nosotros
                cuando se registra, se comunica o interactúa con nosotros a
                través de nuestro sitio web, por correo electrónico, teléfono u
                otro medio. Puede decidir no proporcionarnos cierta información
                o actualizar, rectificar, suprimir cualquier información que
                haya compartido previamente. Por medio de estas interacciones,
                usted puede compartir con nosotros su nombre, teléfono, correo
                electrónico y tema de proyecto.
              </p>
              <div className="section-head mb-20">
                <div className="section-title">
                Información compartida
                </div>
              </div>
              <p>
                La información personal que comparte con nosotros, será tratada
                con las siguientes finalidades de carácter general: Responder a
                sus consultas y solicitudes. Comunicarnos con usted. Informarle
                las novedades de su solicitud. Brindar servicios. Enviar
                información de los contenidos y campañas acordes a los
                contenidos. Informarle sobre los cambio o modificaciones en las
                políticas de Monicahenao.com.
              </p>
              <div className="section-head mb-20">
                <div className="section-title">
                Modificaciones
                </div>
              </div>
              <p>
                Si se modificara cualquier parte de la información que le
                proporcionó a Monicahenao.com, por ejemplo, si cambia su dirección
                de correo electrónico o nombre, puede actualizar, modificar o
                eliminar la información mediante el envío de una solicitud a
                monicahenaops@gmail.com.
              </p>
              <div className="section-head mb-20">
                <div className="section-title">
                Protección de información
                </div>
              </div>
              <p>
                A través de este medio Monicahenao.com solicita la
                autorización a todos sus usuarios para continuar haciendo uso de
                los datos personales de manera adecuada.
              </p>
              <div className="section-head mb-20">
                <div className="section-title">
                Almacenamiento
                </div>
              </div>
              <p>
                Mantenemos su información personal únicamente durante el plazo
                que necesitemos hacerlo, para así poder usarla por los motivos
                indicados en esta política de privacidad y durante el plazo que
                debamos mantenerla según lo establecido en la ley. Después de
                presentar una solicitud, conservamos su información por un plazo
                limitado de 36 meses.
              </p>
              <div className="section-head mb-20">
                <div className="section-title">
                  Contacto
                </div>
              </div>
              <p>
                Si tiene alguna pregunta, comentario o inquietud o desea
                presentar una queja por la forma en que usamos la información
                personal que tenemos sobre usted, envíe un correo electrónico a
                monicahenaops@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AppointmentForm />
    </>
  );
};
