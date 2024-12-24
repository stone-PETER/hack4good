import React from "react";

export const Sponsors=(props)=>
{
    return(
        <div id="sponsors" className="sponsors">
          <div className="col-md-10 col-md-offset-1 section-title text-center">
            <h2>Our Partners</h2>

        </div>
        <div className="internshipPool">
            <h2>Internship Pool</h2>
            <h2>Meet Our Technical Partener</h2>
                <div className="partner">
                    <img src="img/logo/Swapp_design_logo.png" alt="" />
                    <p>Swapp Design is transforming electric mobility with their autonomous battery-swapping for electric 4-wheelers. Their tech integrates with LCVs improving both affordability and agility. Their tech is 'Made in Bharat', and accelerates EV adoption sustainably, in line with UN SDGs 7~12.</p>
                </div>
                <div className="partner">
                    <img src="img/logo/Group 16.png" alt="" className="algata" />
                    <p>
                    Amidst the whirlwind of rapid advancements and transformative changes, Algata stands as the beacon of innovation, setting the gold standard for unparalleled service. Our relentless pursuit of excellence ensures that we not only navigate but lead through this dynamic landscape, delivering unrivaled quality and forging the future with every solution we provide.
                    </p>
                </div>
        </div>
        </div>
    );
}