import React from "react";

export const Registration=(props)=>
{
    return(
    <div id="registration">
        <div className="col-md-10 col-md-offset-1 section-title text-center">
          <h2>Ticket Rates for Hackathon</h2>
          <p>
            Teams of maximum 4 members
          </p>
        </div>
         <div className="cards">
            <div className="card">
                <h3>IEEE  Membered Team</h3>
                <h2>₹400</h2>
                <p>Requires atleast one IEEE Member in the Team</p>
                <a href="https://forms.gle/Cq6RGUNHL3VNwoFg7" target="_blank">Register now</a>
            </div>
            <div className="card">
                <h3>IEEE SPS Membered Team</h3>
                <h2>₹300</h2>
                <p>Requires atleast one IEEE SPS Member in the Team</p>
                <a href="https://forms.gle/Cq6RGUNHL3VNwoFg7" target="_blank">Register now</a>
            </div>
            <div className="card">
                <h3>Non-IEEE Membered Team</h3>
                <h2>₹500</h2>
                <p></p>
                <a href="https://forms.gle/Cq6RGUNHL3VNwoFg7" target="_blank" >Register now</a>
            </div>
        </div>
    </div>  
    );
};