export const VideoHome = () => {
  return (
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
  );
};
