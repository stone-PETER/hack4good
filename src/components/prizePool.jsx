import React from "react";
const PrizePool = () => {
  return (
    <section id="prize-pool">
      <div className="container">
        <h2 className="section-title">Prize Pool</h2>
        <div className="prizes">
          <div className="prize">
            <h3>First Prize</h3>
            <p>$5000</p>
          </div>
          <div className="prize">
            {/*<FontAwesomeIcon icon="fa-solid fa-trophy" />*/}
            <h3>Second Prize</h3>
            <p>$3000</p>
          </div>
          <div className="prize">
            <h3>Third Prize</h3>
            <p>$1000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;
