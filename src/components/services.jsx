import React from "react";

export const Services = (props) => {
  const remainingElements = props.data ? props.data : [];

  const secondAndThirdElements = remainingElements.slice(0, 2);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Prize Pool</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        {/* <div className="row">
          {firstElement ? (
            <div key={`${firstElement.name}-0`} className="col-md-12 prizes">
              <div className="prize">
                <i className="fa fa-trophy"></i>
                <h3 id="lakh">₹ 1 Lakh </h3>
                <h4 id="pool">Prize Pool</h4>
                <h3>{firstElement.name}</h3> */}
        {/* <p>{firstElement.text}</p>
              </div>
              <div className="service-desc">
                <p>{firstElement.text}</p>
              </div>
            </div>
          ) : (
            "loading"
          )}
        </div> */}
        <div className="row">
          <div className="col-md-6 prizes">
            <div className="prize">
              <div className="prize-head">
                <div className="prize-title">
                  <h3>HACK4GOOD</h3>
                </div>
              </div>
              <h3 className="lakh black">1 Lakh</h3>
              <h4 className="pool black">Prize Pool</h4>
            </div>
            <div className="service-desc"></div>
          </div>
          <div className="col-md-6 prizes">
            <div className="prize">
              <div className="prize-head">
                <div className="prize-title">
                  <h3>HACK4GOOD</h3>
                </div>
              </div>
              <h3 className="internship black">Internship Pool</h3>
              <h4 className="eligibility black">for eligible talents</h4>
            </div>
            <div className="service-desc"></div>
          </div>
        </div>

        {/* <div className="row">
          {otherElements.length > 0
            ? otherElements.map((d, i) => (
                <div key={`${d.name}-${i + 3}`} className="col-md-4 prizes">
                  <div className="prize">
                    <i className="fa fa-trophy"></i>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};
