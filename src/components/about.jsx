import React from "react";
import "../../src/index.css";
export const About = (props) => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="row">
        <img
                  className="header-logo"
                  src="img/logo/h4g.jpeg"
                  alt="HTB"
                />          <div className>
            <div className="about-text">
              <h2>About Hack4Good </h2>
              <p>
              Hack4Good, an innovative platform where coding meets compassion and creativity meets community.
Flagship Hackathon event of IEEE Signal Processing Society (SPS) Kerala Chapter,Powered by IEEE
Humanitarian Technologies Board ,the satellite event for ICASSP 2025 organized by IEEE SPS Kerala
Chapter, Hack4Good is a dynamic Three phased Hackathon aimed at leveraging technology to address
real-world challenges and advance the United Nations' Sustainable Development Goals (SDGs). At
Hack4Good, we believe in the transformative power of technology to drive positive change.Our mission is to provide a space where developers of all levels - from seasoned professionals to
budding enthusiasts - can come together to collaborate, learn, and innovate.The aim is to find good
effective solutions for problems that are being obstacles to Sustainability. Hackathon is divided into
three phases,with first two phases being online and Final phase will be a 24 hour Offline Hackathon.
Top deserving 40 teams are to be selected into the Final phase and will be provided with Mentors for
mentorship and guidance.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="img/Spskerala.png" alt="" id="sps"/>
          <div className>
            <div className="about-text">
              <h2>About IEEE SPS Kerala Chapter</h2>
              <p>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="img/IEEEHTB.webp" alt="" />
          <div className>
            <div className="about-text">
              <h2>About IEEE HTB</h2>
              <p>
                The IEEE Humanitarian Technologies Board (HTB) inspires and
                empowers IEEE volunteers around the world carrying out and
                supporting impactful humanitarian technology activities at the
                local level.The IEEE HTB mission is to support impactful and
                ethically informed volunteer-led initiatives, programs and
                projects, and mutually beneficial partnerships, as well as to
                inform policy formulation that harness technology and innovation
                to address societal challenges (including disaster recovery) in
                a responsive, effective, and sustainable way.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="img/logo/nitc.jpeg" alt="" />
          <div className>
            <div className="about-text">
              <h2>About IEEE NITC SB </h2>
              <p>
                NITC SB is a group of enthusiastic students passionate about
                technology and innovation, dedicated to fostering technical
                skills, knowledge sharing, and professional growth among its
                members. Through a range of events, workshops, and projects,
                NITC SB strives to build a vibrant community that promotes
                collaboration and learning in the engineering field.
              </p>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};
