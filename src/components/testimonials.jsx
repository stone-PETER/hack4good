import React from "react";

export const Testimonials = (props) => {
  // Counter for continuous numbering
  let counter = 1;

  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Problem Statements</h2>
        </div>
        {/* Group by unique SDG values */}
        {Array.from(new Set(props.data?.map((d) => d.SDG) || [])).map((sdg) => (
          <div key={sdg} className="row">
            <div className="col-md-12">
              <h3>{sdg}</h3>
              <div className="row">
                {/* Group by 'no' attribute within each SDG */}
                {Array.from(
                  new Set(
                    props.data?.filter((d) => d.SDG === sdg).map((d) => d.no) ||
                      []
                  )
                ).map((no) => {
                  const currentNumber = counter++;
                  return (
                    <div key={`${sdg}-${no}`} className="col-md-4">
                      {/* <a
                            href="https://tinyurl.com/Hack4Good-Registration"
                            className="btn btn-custom btn-lg testimonial-btn page-scroll"
                          >
                            Register Now
                          </a>{" "} */}
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <div className="testimonial-number">
                            Problem Statement {currentNumber}
                          </div>
                          {props.data
                            ?.filter((d) => d.SDG === sdg && d.no === no)
                            .map((d, i) => (
                              <div key={i}>
                                <div className="testimonial-meta">
                                  {d.title}
                                </div>
                                {d.text && <p>{d.text}</p>}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
