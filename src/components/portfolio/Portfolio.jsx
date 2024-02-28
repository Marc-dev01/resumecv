import React from "react";

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/*  <!-- portfolio-wrapper --> */}
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title="">
                    <img src="images/portfolio/coffee.jpg" alt="" />

                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coffee</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/*  <!-- item end --> */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title="">
                    <img src="images/portfolio/console.jpg" alt="" />

                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Console</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* <!-- item end --> */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title="">
                    <img src="images/portfolio/judah.jpg" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Judah</h5>
                        <p>Webdesign</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/*  <!-- item end --> */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title="">
                    <img src="images/portfolio/into-the-light.jpg" alt="" />

                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Into The Light</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/*  <!-- item end --> */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title="">
                    <img src="images/portfolio/farmerboy.jpg" alt="" />

                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Farmer Boy</h5>
                        <p>Branding</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* <!-- item end --> */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title="">
                    <img src="images/portfolio/girl.jpg" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Girl</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* <!-- item end --> */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title="">
                    <img src="images/portfolio/origami.jpg" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Origami</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* <!-- item end --> */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title="">
                    <img src="images/portfolio/retrocam.jpg" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Retrocam</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* <!-- item end --> */}
            </div>
            {/* <!-- portfolio-wrapper end --> */}
          </div>
          {/* <!-- twelve columns end --> */}
          {/*         <!-- Modal Popup-> */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-coffee.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Coffee Cup</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding, Webdesign
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* <!-- modal-01 End --> */}
          <div id="modal-02" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-console.jpg"
              alt=""
            />
            <div class="description-box">
              <h4>Console</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding, Web Development
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* <!-- modal-02 End --> */}
          <div id="modal-03" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-judah.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Judah</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* <!-- modal-03 End --> */}
          <div id="modal-04" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-intothelight.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Into the Light</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Photography
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* <!-- modal-04 End --> */}
          <div id="modal-05" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-farmerboy.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Farmer Boy</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding, Webdesign
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* <!-- modal-05 End --> */}
          <div id="modal-06" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-girl.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Girl</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Photography
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* <!-- modal-06 End --> */}
          <div id="modal-07" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-origami.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Origami</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding, Illustration
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* <!-- modal-07 End --> */}
          <div id="modal-08" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-retrocam.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Retrocam</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Webdesign, Photography
              </span>
            </div>
            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* <!-- modal-01 End --> */}
        </div>{" "}
        {/* <!-- row End --> */}
      </section>
    </div>
  );
};

export default Portfolio;
