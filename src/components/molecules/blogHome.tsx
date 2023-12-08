export const BlogHome = () => {
  return (
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
  );
};
