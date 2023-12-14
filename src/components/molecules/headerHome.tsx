export const HeaderHome = () => {
  return (
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
                  <h6>Monica Henao - Personal Shopper</h6>
                  <h1>Personal Shopping</h1>
                  <a href={`/contact`} className="button-4">
                    Contáctame<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
