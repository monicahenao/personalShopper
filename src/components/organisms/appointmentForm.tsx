import { useState } from "react";
import { Image8 } from "../../assets";

export const AppointmentForm = () => {
  const [formContact, setFormContact] = useState({
    author: "",
    phone: "",
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
    <section className="appointment">
      <div
        className="background bg-img bg-fixed section-padding"
        data-background={Image8}
        data-overlay-dark="4"
      >
        <div className="container">
          <div className="row">
            {/* <!-- Appointment call --> */}
            <div className="col-md-5 mb-30 mt-90">
              <h5>
                Para enviar una consulta o concertar una cita, llámeme o,
                alternativamente, complete el formulario.
              </h5>
              <div className="reservations">
                <div className="icon color-1">
                  <span className="flaticon-phone-call"></span>
                </div>
                <div className="text">
                  <p className="color-1">Estemos en Contacto</p>
                  <a className="color-1" href="tel:301-485-4669">
                    301 485 4669
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Appointment form --> */}
            <div className="col-md-5 offset-md-2">
              <div className="booking-box">
                <div className="head-box text-center">
                  <h4>Obtén una Cita</h4>
                </div>
                <div className="booking-inner clearfix">
                  <form className="form1 clearfix">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input1_wrapper">
                          <label htmlFor="author">Nombre</label>
                          <div className="input2_inner">
                            <input
                              type="text"
                              name="author"
                              className="form-control input"
                              placeholder="Name"
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
                              placeholder="Phone"
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
                      <div className="col-md-12">
                        <div className="input1_wrapper">
                          <label>Mensaje</label>
                          <div className="input2_inner">
                            <textarea
                              name="message"
                              id="message"
                              cols={20}
                              rows={3}
                              placeholder="Message"
                              required
                              onChange={handlerChange}
                              value={formContact.message}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn-form1-submit mt-15"
                          onClick={handlerSubmit}
                        >
                          ENVIAR
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
