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
      <div className="trend-header">
        <h1>Trending Pools</h1>
        <button type="">Explore</button>
      </div>
      <p>
        Earn Interest on your in-game tokens APY, interest is over one year
        period
      </p>
      <div className="trend-container">
        <div>
          <img src={pool_nemesis} alt="pool_nemesis" />
          <p>Nemesis</p>
          <p2>13.2% APY</p2>
        </div>
        <div>
          <img src={pool_deep} alt="pool_deep" />
          <p>Deep Pool</p>
          <p2>19% APY</p2>
        </div>
        <div>
          <img src={pool_survivor} alt="pool_survivor" />
          <p>Survivor's</p>
          <p2>8% APY</p2>
        </div>
        <div>
          <img src={pool_magical} alt="pool_magical" />
          <p>Magical Lake</p>
          <p2>11.2% APY</p2>
        </div>
      </div>
    </div>
  );
};

export default Trend;
