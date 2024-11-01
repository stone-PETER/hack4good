import React from "react";
import "../../src/index.css";
export const About = (props) => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="row">
          <img src="img/SpsKerala.png" alt="" />
          <div className>
            <div className="about-text">
              <h2>About Hack4Good </h2>
              <p>
                Welcome to Hack4Good, an innovative platform where coding meets
                compassion and creativity meets community. Powered by the IEEE
                Signal Processing Society (SPS) Kerala Chapter, Hack4Good is a
                dynamic Long Term Hackathon aimed at leveraging technology to
                address real-world challenges and advance the United Nations'
                Sustainable Development Goals (SDGs). At Hack4Good, we believe
                in the transformative power of technology to drive positive
                change. Our mission is to provide a space where developers of
                all levels - from seasoned professionals to budding enthusiasts
                - can come together to collaborate, learn, and innovate. Whether
                you're passionate about coding, problem-solving, or making a
                difference in the world, there's a place for you here. Join us
                on this exciting journey as we harness the power of technology
                for the greater good. Together, let's unleash our creativity,
                passion, and expertise to create a brighter, more sustainable
                future for all.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="img/IEEENitc.svg" alt="" />
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
      </div>
    </div>
  );
};
