import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm Jonathan Doe.</h1>
          <h3>
            I'm a Manila based <span>graphic designer</span>,
            <span>illustrator</span> and <span>webdesigner</span> creating
            awesome and effective visual identities for companies of all sizes
            around the globe. Let's
            <a className="smoothscroll" href="#about">
              start scrolling
            </a>
            and learn more
            <a className="smoothscroll" href="#about">
              about me.
            </a>
          </h3>
          <hr />
          <ul class="social">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i classNameName="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-skype"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
