import { useState } from "react";
import { Image10 } from "../assets";

export const Contact = () => {
  const [formContact, setFormContact] = useState({
    author: "",
    phone:"",
    email: "",
    message: "",
  });

  const handlerChange = (event: {
    target: { value: string | number; name: string };
  }) => {
    setFormContact({ ...formContact, [event.target.name]: event.target.value });
  };

  const handlerSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(formContact);
  };

  return (
    <>
      <a href={`/contact`} />
      <div
        className="banner-header valign bg-img bg-fixed"
        data-overlay-dark="4"
        data-background={Image10}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-end caption">
              <h1>Ponte en Contacto</h1>
              <h5>Mi información de Contacto</h5>
            </div>
          </div>
        </div>
      </div>
      <section className="info-box section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-head mb-20">
                <div className="section-subtitle">Información de Contacto</div>
                <div className="section-title">Ponte en Contacto</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="section-head mb-30">
                <p>
                  Para enviar una consulta o concertar una cita, llámeme o,
                  alternativamente, complete el formulario.
                </p>
              </div>
              <div className="item">
                <span className="icon flaticon-phone-call"></span>
                <div className="cont">
                  <h5>Teléfono</h5>
                  <p>
                    <a href="tel:3014854669">301 485 46 69</a>
                  </p>
                </div>
              </div>
              <div className="item">
                <span className="icon ti-email"></span>
                <div className="cont">
                  <h5>e-Mail</h5>
                  <p>monicahenaops@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="contact-form bg-lightbrown">
                <div className="booking-inner clearfix">
                  <form
                    method="post"
                    className="form1 clearfix contact__form"
                    action="mail.php"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input1_wrapper">
                          <label htmlFor="author">Nombre</label>
                          <div className="input2_inner">
                            <input
                              type="text"
                              name="author"
                              className="form-control input"
                              placeholder="Nombre"
                              required
                              onChange={handlerChange}
                              value={formContact.author}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input1_wrapper">
                          <label>Teléfono</label>
                          <div className="input2_inner">
                            <input
                              type="text"
                              name="phone"
                              className="form-control input"
                              placeholder="Teléfono"
                              required
                              onChange={handlerChange}
                              value={formContact.phone}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input1_wrapper">
                          <label htmlFor="email">e-Mail</label>
                          <div className="input2_inner">
                            <input
                              type="email"
                              name="email"
                              className="form-control input"
                              placeholder="e-Mail"
                              required
                              onChange={handlerChange}
                              value={formContact.email}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 form-group">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={4}
                          placeholder="Mensaje"
                          required
                          onChange={handlerChange}
                          value={formContact.message}
                        ></textarea>
                      </div>
                      <div className="col-md-12 mb-30">
                        <button className="button-1" onClick={handlerSubmit}>
                          <span>Enviar Mensaje</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
