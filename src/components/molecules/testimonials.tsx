export const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-head">
              <div className="section-subtitle">Clients Reviews</div>
              <div className="section-title">
                What Clients Say <span>About Me</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="testimonials left">
              <figure>
                <img src="img/testiominals.jpg" alt="" className="img-fluid" />
              </figure>
              <div className="caption testimonials">
                <div className="owl-carousel owl-theme">
                  <div className="item-box">
                    <span className="quote">
                      <img src="img/quot.png" alt="" />
                    </span>
                    <h5>"Highly recommend, thank you again!"</h5>
                    <p>
                      Jade is so lovely and did such a great job with my wedding
                      dress along with bridal party and mother of the bride
                      outfits... highly recommend, thank you again!
                    </p>
                    <div className="info">
                      <div className="author-img">
                        <img src="img/team/8.png" alt="" />
                      </div>
                      <div className="cont">
                        <h6>Emily Brown</h6> <span>Customer Review</span>
                      </div>
                    </div>
                  </div>
                  <div className="item-box">
                    <span className="quote">
                      <img src="img/quot.png" alt="" />
                    </span>
                    <h5>
                      "Jade is very thorough with her work and done an amazing
                      job"
                    </h5>
                    <p>
                      Jade is very thorough with her work and done an amazing
                      job with my groom dresses, would highly recommend! Thank
                      you again.
                    </p>
                    <div className="info">
                      <div className="author-img">
                        <img src="img/team/9.png" alt="" />
                      </div>
                      <div className="cont">
                        <h6>Amelia Emma</h6> <span>Customer Review</span>
                      </div>
                    </div>
                  </div>
                  <div className="item-box">
                    <span className="quote">
                      <img src="img/quot.png" alt="" />
                    </span>
                    <h5>"Jade is an AMAZING wizard with a sewing machine!"</h5>
                    <p>
                      Jade is so lovely and did such a great job with my wedding
                      dress along with bridal party and mother of the bride
                      outfits...
                    </p>
                    <div className="info">
                      <div className="author-img">
                        <img src="img/team/7.png" alt="" />
                      </div>
                      <div className="cont">
                        <h6>Jesica Martin</h6> <span>Customer Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
