import React from "react";

export const Services = (props) => {
  const firstElement = props.data ? props.data[0] : null;
  const remainingElements = props.data ? props.data.slice(1) : [];

  const secondAndThirdElements = remainingElements.slice(0, 2);
  const otherElements = remainingElements.slice(2);

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
        <div className="row">
          {firstElement ? (
            <div key={`${firstElement.name}-0`} className="col-md-12">
              <i className="fa fa-trophy"></i>
              <div className="service-desc">
                <h3>{firstElement.name}</h3>
                {/* <p>{firstElement.text}</p> */}
              </div>
            </div>
          ) : (
            "loading"
          )}
        </div>
        <div className="row">
          {secondAndThirdElements.length > 0
            ? secondAndThirdElements.map((d, i) => (
                <div key={`${d.name}-${i + 1}`} className="col-md-6">
                  <i className="fa fa-trophy"></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    {/* <p>{d.text}</p> */}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <div className="row">
          {otherElements.length > 0
            ? otherElements.map((d, i) => (
                <div key={`${d.name}-${i + 3}`} className="col-md-4">
                  <i className="fa fa-trophy"></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    {/* <p>{d.text}</p> */}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
