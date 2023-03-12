import React from "react";
import "./chart.css";

const Chart = () => {
  return (
    <div className="chart">
      <h1>
        Are you ready for a new <br /> adventure?
      </h1>
      <p>
        You are now able to convert USD to LUM, currency used for in-game
        purchaces, APY earning
      </p>
      <div className="chart-container">
        <p1>Convert</p1>
        <p2>Earn interest</p2>
      </div>
      <div className="chart-comingsoon">
        <h1>Coming soon!</h1>
        <p>
          This section is currently in development & will be released in the
          future. To stay up to date, please check out our Medium Posts and join
          our Discord Server!
        </p>
      </div>
    </div>
  );
};

export default Chart;
