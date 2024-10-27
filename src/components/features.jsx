import React, { useState, useEffect } from "react";

export const Features = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div id="features">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title text-center">
          <h2>RoadMap</h2>
          <p>
            This Roadmap of our event would provide you insights on the
            chronolgoy of the event in the right direction
          </p>
        </div>
        <div class="row">
          <div class="col-lg-6 order-2 order-lg-1 row-col">
            <div
              class="icon-box mt-5 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i class="bx bx-receipt"></i>
              <h4>Online Registration starts</h4>
              <p>
                Once the registration starts and teams register for the
                hackathon they will be provided with Problem statements that is
                to be solved based on UN Goals mentioned above.
              </p>
            </div>
            <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-cube-alt"></i>
              <h4>Phase 1 Elimination round</h4>
              <p>
                Abstract submission and filtering of teams registered based on
                UN goals and Problem statement
              </p>
              <p>Selected teams will be assigned with Mentors</p>
            </div>
            <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="300">
              <i class="bx bx-user"></i>
              <h4>Phase 2 Elimination round</h4>
              <p>
                Midway checkpoint of progress to be analysed by Mentors and
                Judges,they will look deep into the progress of the teams and
                how they are working to put up a proper good solution,based on
                all these judging criteria Teams are selcted for the final round
              </p>
            </div>
            <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="400">
              <i class="bx bx-shield"></i>
              <h4>Hackathon Final Round Offline event </h4>
              <p>
                Final selected teams will be invited to compete in an offline
                venue
              </p>
              <p>
                Talk sessions are also set up in parallel with Hackathon final
                round for the non participants
              </p>
              <p>
                Winner announcement of Hack4Good would be done.Judges will
                analyse and decide which team did their best to provide a
                solution that resembles with UN Goals
              </p>
            </div>
          </div>
          <div
            class={`image col-lg-6 order-1 order-lg-2 ${
              windowWidth < 768 ? "small-screen" : ""
            }`}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img src="/img/features.svg" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};
