import { useState } from "react";

export const SuscribeFooter = () => {
  const [formContact, setFormContact] = useState({
    email: "",
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
    <div className="footer-column footer-explore clearfix">
      <h3 className="footer-title">Suscríbete</h3>
      <div className="row subscribe">
        <div className="col-md-12">
          <p>Suscríbete para recibir nuevas actualizaciones y promociones.</p>
          <form>
            <input
              type="text"
              name="email"
              placeholder="Tu email"
              required
              onChange={handlerChange}
              value={formContact.email}
            />
            <button onClick={handlerSubmit}>Suscríbete</button>
          </form>
        </div>
      </div>
    </div>
  );
};
