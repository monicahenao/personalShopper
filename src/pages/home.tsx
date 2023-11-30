export const Home = () => {
  return (
    <>
      {/* <!-- Header Video --> */}
      <header className="header">
        <div className="video-fullscreen-wrap">
          {/* <!-- The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. --> */}
          <div className="video-fullscreen-video" data-overlay-dark="3">
            <video playsInline autoPlay>
              <source
                src="https://duruthemes.com/demo/html/tailorand/video2.mp4"
                type="video/mp4"
              />
              <source
                src="https://duruthemes.com/demo/html/tailorand/video2.webm"
                type="video/webm"
              />
            </video>
          </div>
          <div className="caption overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-1 text-center">
                  <div className="v-middle">
                    <h6>Jade Tailor - Personal Stylist</h6>
                    <h1>
                      Personal Shopping
                      <br />
                      Stylist
                    </h1>
                    <a href="#" className="button-4">
                      Work With Jade<span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- About --> */}
      <section className="about section-padding" data-scroll-index="1">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 mb-30 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="section-head mb-20">
                <div className="section-subtitle">About Jade Tailor</div>
                <div className="section-title">
                  Find Your Style <span>With Me</span>
                </div>
              </div>
              <p>
                Style sit amet risus ac dui auctor posuere sit amet eget libero.
                Ut lacinia lectusan risus facilisis, semper consequat sem
                fringilla. Etiam et tincidunt felis. Quisque at maximus nulla
                dictum vestibulum sed interdum neque dictum.
              </p>
              <p>
                Your style lobortis sollicitudin purus vel posuere. Maecenas
                auctor, turpis quis mattis tristique, ligula dolor vestibulum
                risus, nec ullamcorper justo dolor soda lorem. Sed interdum arcu
                ac metus mollis venenatis.
              </p>
              <ul className="about-list list-unstyled mb-20">
                <li>
                  <div className="about-list-icon">
                    <span className="ti-check"></span>
                  </div>
                  <div className="about-list-text">
                    <p>7+ years of work</p>
                  </div>
                </li>
                <li>
                  <div className="about-list-icon">
                    <span className="ti-check"></span>
                  </div>
                  <div className="about-list-text">
                    <p>150+ free consultations</p>
                  </div>
                </li>
                <li>
                  <div className="about-list-icon">
                    <span className="ti-check"></span>
                  </div>
                  <div className="about-list-text">
                    <p>90+ happy clients</p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="row img-twice position-relative h-100">
                <div
                  className="col-6 animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <img className="img-fluid" src="img/t1.jpg" alt="" />
                </div>
                <div
                  className="col-6 align-self-end animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <img className="img-fluid" src="img/t3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services --> */}
      <section className="services section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-head text-center">
                <div className="section-subtitle">What I do</div>
                <div className="section-title">
                  My <span>Services</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                <div className="item right">
                  <figure>
                    <img src="img/slider/10.jpg" alt="" className="img-fluid" />
                  </figure>
                  <div className="caption padding-left">
                    <div className="title">Individual Consultation</div>
                    <p>
                      Lorem lobortis sollicitudin purus vel posuere. Maecenas
                      auctor, turpis quis mattis tristique, ligula dolor
                      vestibulum risus, nec ullamcorper justo dolor soda lorem.
                      Sed interdum arcu ac metus mollis venenatis.
                    </p>
                    <a href="services-page.html" className="button-1">
                      Learn More<span></span>
                    </a>
                  </div>
                </div>
                <div className="item right">
                  <figure>
                    <img src="img/slider/8.jpg" alt="" className="img-fluid" />
                  </figure>
                  <div className="caption padding-left">
                    <div className="title">Wardrobe Styling</div>
                    <p>
                      Lorem lobortis sollicitudin purus vel posuere. Maecenas
                      auctor, turpis quis mattis tristique, ligula dolor
                      vestibulum risus, nec ullamcorper justo dolor soda lorem.
                      Sed interdum arcu ac metus mollis venenatis.
                    </p>
                    <a href="services-page.html" className="button-1">
                      Learn More<span></span>
                    </a>
                  </div>
                </div>
                <div className="item right">
                  <figure>
                    <img src="img/slider/9.jpg" alt="" className="img-fluid" />
                  </figure>
                  <div className="caption padding-left">
                    <div className="title">Personal Shopping</div>
                    <p>
                      Lorem lobortis sollicitudin purus vel posuere. Maecenas
                      auctor, turpis quis mattis tristique, ligula dolor
                      vestibulum risus, nec ullamcorper justo dolor soda lorem.
                      Sed interdum arcu ac metus mollis venenatis.
                    </p>
                    <a href="services-page.html" className="button-1">
                      Learn More<span></span>
                    </a>
                  </div>
                </div>
                <div className="item right">
                  <figure>
                    <img src="img/slider/11.jpg" alt="" className="img-fluid" />
                  </figure>
                  <div className="caption padding-left">
                    <div className="title">Personal Styling</div>
                    <p>
                      Lorem lobortis sollicitudin purus vel posuere. Maecenas
                      auctor, turpis quis mattis tristique, ligula dolor
                      vestibulum risus, nec ullamcorper justo dolor soda lorem.
                      Sed interdum arcu ac metus mollis venenatis.
                    </p>
                    <a href="services-page.html" className="button-1">
                      Learn More<span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Box --> */}
      <section className="services-box">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="item">
                <span className="icon">01</span>
                <div className="cont">
                  <h5>Wardrobe Styling</h5>
                  <p>
                    Lorem ipsum nisl quam nestibulum drana elementum sceisue the
                    monte.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="item">
                <span className="icon">02</span>
                <div className="cont">
                  <h5>Closet Cleanse</h5>
                  <p>
                    Lorem ipsum nisl quam nestibulum drana odio elementum monte.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="item">
                <span className="icon">03</span>
                <div className="cont">
                  <h5>Shopping Tour</h5>
                  <p>
                    Lorem ipsum nisl quam nestibulum drana odio elementum
                    sceisue the can.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Video --> */}
      <section
        className="section-padding video-wrapper video bg-img bg-fixed"
        data-overlay-dark="4"
        data-background="img/slider/6.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-head text-center">
                <div className="section-title white">
                  <span>Discover</span> My Video Tips And Hints
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <a className="vid" href="https://youtu.be/Zxqd9bakmaM">
                <div className="vid-butn">
                  <span className="icon">
                    <i className="ti-control-play"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Pricing --> */}
      <section className="pricing section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-head text-center">
                <div className="section-subtitle">Pricing Plan</div>
                <div className="section-title">
                  Styling <span>Packages</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="pricing-card">
                <div className="img">
                  <img src="img/slider/8.jpg" alt="" />
                </div>
                <div className="desc">
                  <div className="name">In-Home Styling</div>
                  <div className="amount">
                    <span>starting at</span> $300
                  </div>
                  <ul className="list-unstyled list mb-30">
                    <li>
                      <i className="ti-check"></i> Lorem ipsum nisan amet vina
                    </li>
                    <li>
                      <i className="ti-check"></i> Orci miss natoque vasa ince
                    </li>
                    <li>
                      <i className="ti-close"></i>Lorem amet in ipsum morbin
                    </li>
                  </ul>
                  <a href="#" className="button-2 full-width">
                    Work With Me<span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card">
                <div className="img">
                  <img src="img/slider/9.jpg" alt="" />
                </div>
                <div className="desc">
                  <div className="name">Half-Day Shopping</div>
                  <div className="amount">
                    <span>starting at</span> $450
                  </div>
                  <ul className="list-unstyled list mb-30">
                    <li>
                      <i className="ti-check"></i> Lorem ipsum nisan amet vina
                    </li>
                    <li>
                      <i className="ti-check"></i> Orci miss natoque vasa ince
                    </li>
                    <li>
                      <i className="ti-close"></i>Lorem amet in ipsum morbin
                    </li>
                  </ul>
                  <a href="#" className="button-1 full-width">
                    Work With Me<span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card">
                <div className="img">
                  <img src="img/slider/10.jpg" alt="" />
                </div>
                <div className="desc">
                  <div className="name">Full-Day Shopping</div>
                  <div className="amount">
                    <span>starting at</span> $600
                  </div>
                  <ul className="list-unstyled list mb-30">
                    <li>
                      <i className="ti-check"></i> Lorem ipsum nisan amet vina
                    </li>
                    <li>
                      <i className="ti-check"></i> Orci miss natoque vasa ince
                    </li>
                    <li>
                      <i className="ti-check"></i>Lorem amet in ipsum morbin
                    </li>
                  </ul>
                  <a href="#" className="button-2 full-width">
                    Work With Me<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials --> */}
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
                  <img
                    src="img/testiominals.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <div className="caption testimonials">
                  <div className="owl-carousel owl-theme">
                    <div className="item-box">
                      <span className="quote">
                        <img src="img/quot.png" alt="" />
                      </span>
                      <h5>"Highly recommend, thank you again!"</h5>
                      <p>
                        Jade is so lovely and did such a great job with my
                        wedding dress along with bridal party and mother of the
                        bride outfits... highly recommend, thank you again!
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
                      <h5>
                        "Jade is an AMAZING wizard with a sewing machine!"
                      </h5>
                      <p>
                        Jade is so lovely and did such a great job with my
                        wedding dress along with bridal party and mother of the
                        bride outfits...
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
      {/* <!-- Style Gallery --> */}
      <section className="section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-head">
                <div className="section-subtitle">My Portfolio</div>
                <div className="section-title">
                  Find Your Ideal Style
                  <br />
                  and Look?
                </div>
              </div>
            </div>
          </div>
          <div className="row" data-masonry='{"percentPosition": true }'>
            <div className="col-md-4 gallery-item">
              <a href="img/gallery/7.jpg" title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="img/gallery/7.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="img/gallery/2.jpg" title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="img/gallery/2.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="img/gallery/3.jpg" title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="img/gallery/3.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="img/gallery/6.jpg" title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="img/gallery/6.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="img/gallery/1.jpg" title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="img/gallery/1.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="img/gallery/5.jpg" title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="img/gallery/5.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="img/gallery/4.jpg" title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img
                      src="img/gallery/4.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog --> */}
      <section className="blog section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-head text-center">
                <div className="section-subtitle">Latest news</div>
                <div className="section-title white">
                  News <span>&</span> Blog
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/slider/13.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>29</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="blog.html">Fashion Style</a>
                    </span>
                    <h5>
                      <a href="post.html">
                        How To Elevate Your Whimsical Wardrobe
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/slider/5.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>27</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="blog.html">Business Style</a>
                    </span>
                    <h5>
                      <a href="post.html">
                        Women’s Business Formal Attire To Promote Your Style
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/slider/14.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>25</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="blog.html">Personal Styling</a>
                    </span>
                    <h5>
                      <a href="post.html">
                        Fierce Fashion Tips to Level-Up Your Looks
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/slider/15.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>23</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="blog.html">New Trend</a>
                    </span>
                    <h5>
                      <a href="post.html">
                        Fashion’s Prettiest (and Comfiest) New Trend
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Appointment Form --> */}
      <section className="appointment">
        <div
          className="background bg-img bg-fixed section-padding"
          data-background="img/slider/3.jpg"
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
                            <label>Nombre</label>
                            <div className="input2_inner">
                              <input
                                type="text"
                                className="form-control input"
                                placeholder="Name"
                                required
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
                                className="form-control input"
                                placeholder="Phone"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input1_wrapper">
                            <label>e-Mail</label>
                            <div className="input2_inner">
                              <input
                                type="email"
                                className="form-control input"
                                placeholder="e-Mail"
                                required
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
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn-form1-submit mt-15"
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
      {/* <!-- Clients --> */}
      <section className="clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/1.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/2.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/3.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/4.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/5.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/6.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/7.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/8.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/9.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="img/clients/10.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
