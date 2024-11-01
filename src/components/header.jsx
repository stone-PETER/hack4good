import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
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
                <p>In collaboration with IEEE SB NITC</p>
                <p>
                  Final hack to be held on December 28th,29th At,
                  <a
                    href="https://www.google.com/maps/place/NIT+Calicut/@11.3216018,75.9337379,15z/data=!4m6!3m5!1s0x3ba642fd50000001:0xbe8a77db953bda6c!8m2!3d11.3216018!4d75.9337379!16zL20vMDM5ZHh6?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    NIT Calicut
                  </a>
                </p>
                <a
                  href="#features"
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
