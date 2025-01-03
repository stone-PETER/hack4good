import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
import ProblemStatements from "./components/problemStatements";
//import {Registration} from "./components/registration";
import { Sponsors } from "./components/sponsors";
import { Contact } from "./components/contact";
import { Posters } from "./components/posters";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Result } from "./components/results";
import { Phase2 } from "./components/phase2";
import { Phase1 } from "./components/phase1";
// import PrizePool from "./components/prizePool";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Header data={landingPageData.Header} />
                <About data={landingPageData.About} />
                <Features data={landingPageData.Features} />
                <ProblemStatements />
                <Services data={landingPageData.Services} />
                {/* <PrizePool data={landingPageData.PrizePool} /> */}
                {/* <Gallery data={landingPageData.Gallery} /> */}
                {/* <Testimonials data={landingPageData.Testimonials} /> */}
                {/* <Team data={landingPageData.Team} /> */}

                {/*<Registration data={landingPageData.Registration}/>*/}
                <Sponsors data={landingPageData.sponsors} />
                <Result />
                <Posters data={landingPageData.Posters} />
                <Contact data={landingPageData.Contact} />
              </>
            }
          />
          <Route
            path="/problem-statements"
            element={
              <>
                <Navigation />
                <Testimonials data={landingPageData.Problems} />
              </>
            }
          />
          <Route
            path="/phase1"
            element={
              <>
                <Navigation />
                <Phase2 data={landingPageData.Phase2} />
                <Phase1 data={landingPageData.Phase1} />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
