export const GalleryHome = () => {
  return (
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
  );
};
