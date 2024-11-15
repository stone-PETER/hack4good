import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="hero-vid">
          <video autoPlay muted loop id="myVideo">
            <source src="/Hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h3>IEEE SPS Kerala Chapter presents </h3>
                <img
                  className="header-logo"
                  src="img/logo/hack 4 good no bg.png"
                  alt="HTB"
                />
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <p>In collaboration with The IEEE SB NITC</p>
                <p>Final Hack: December 28th, 29th, NIT Calicut</p>
                <a
                  href="#registration"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Register Now
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
