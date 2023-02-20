import React from "react";
import "./trending.css";
import {
  pool_deep,
  pool_magical,
  pool_nemesis,
  pool_survivor,
} from "./imports";

const Trend = () => {
  return (
    <div className="trend">
      <h1>Trending Pools</h1>
      <p>
        Earn Interest on your in-game tokens APY, interest is over one year piod
      </p>
      <div className="trend-container">
        <img src={pool_nemesis} alt="pool_nemesis" />
        <img src={pool_deep} alt="pool_deep" />
        <img src={pool_survivor} alt="pool_survivor" />
        <img src={pool_magical} alt="pool_magical" />
      </div>
    </div>
  );
};

export default Trend;
