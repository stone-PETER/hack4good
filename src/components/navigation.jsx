import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="page-scroll" href="#about">
            <img
              className="nav-logo"
              src="img/logo/sps kc png.png"
              alt="SPSKC"
            />
          </a>
          <a className="page-scroll" href="#about">
            <img
              className="nav-logo"
              src="img/logo/humtn logo png.png"
              alt="HTB"
            />
          </a>
          <a className="page-scroll secondary" href="#about">
            <img className="nav-logo" src="img/logo/NITC.png" alt="HTB" />
          </a>
          <a className="page-scroll secondary" href="#about">
            <img
              className="nav-logo"
              src="img/logo/icassp 25 png.png"
              alt="HTB"
            />
          </a>
          <a className="page-scroll secondary" href="#about">
            <img
              className="nav-logo"
              src="img/logo/ieee foundation png.png"
              alt="HTB"
            />
          </a>
          <a className="page-scroll secondary" href="#about">
            <img className="nav-logo" src="img/logo/ieee png.png" alt="HTB" id="ieee" />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Prizes
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
