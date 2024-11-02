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
            chronolgoy of the event
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
              <h4>Phase 1 : Ideation Hack</h4>
              <p>
                Registration starts : 2/11/2024
                <br />
                -Ideation Hack,the first phase of Hack4Good is to register with your idea for devloping solution based on the given 20 problem statements that come under United Nations Sustainability development Goals.Your application must consist of :
                <br />
                1. Title and Team Details
                <br />
                2. Abstract
                <br />
                3. Problem Statement
                <br />
                4. Proposed Solution
                <br />
                5. Technology Stack
                <br />
                6. Implementation Plan
                <br />
                7.Expected Outcomes
                <br />
                8.Pros and Cons
                <br />
                9.SDG Alignment
                <br />
                10.Pitch Summary
                <br />
                -To be submitted in the form of PDF.
              </p>
            </div>
            <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-cube-alt"></i>
              <h4>Phase 2 : Hack Tank</h4>
              <p>
                -Teams selected from phase 1 will be going to Hack Tank round.
                <br />
                -Panel of experts will cross the idea of teams while the teams try to convince why the idea suits
                 sustainability as well as how it solves the problem.
                 <br />
                -It would follow a corporate product presentation of why and how their product is to be designed.
                <br />
                -It would follow more of a debate format where the team would have to convince the panel about their
                 ideas.
                 <br />
                -Presentation, Flowcharts could be used during this phase review.
                <br />
              </p>
              <p>Selected teams will be assigned with Mentors</p>
            </div>
            <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="300">
              <i class="bx bx-user"></i>
              <h4>Phase 3 : Final Hack : 24 Hours</h4>
              <p>
                Final selected teams will be invited to compete in an offline
                venue
              </p>
              <p>
                Mentoring sessions for the Final selected teams will be provided.
                <br />
                -Each team would be guided by a mentor for the final hack.
              </p>
              <p>
                Final Hack will have 24 Hours of Offline Hackathon at NIT Calicut
                <br />
              </p>
            </div>
            {/* <div class="icon-box mt-5" data-aos="fade-up" data-aos-delay="400">
              <i class="bx bx-shield"></i>
              <h4>Hackathon Final Round Offline event </h4>
             
            </div> */}
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
