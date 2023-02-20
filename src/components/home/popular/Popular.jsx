import React from "react";
import "./popular.css";
import {
  lovers_nightmare,
  star_hunter,
  survivor,
  planet_discover,
} from "./imports";

const Popular = () => {
  return (
    <div>
      <div className="popular">
        <h1>Popular games right now on the market</h1>
        <hr className="hr" />
        <div>
          <p>Enjoy some of the best games we got to offer</p>
          <p>The lastest and best games on web3</p>
        </div>
        <div className="popular-container">
          <div>
            <img src={lovers_nightmare} alt="lovers nightmare" />
          </div>
          <div>
            <img src={planet_discover} alt="planet discover" />
          </div>
          <div>
            <img src={star_hunter} alt="star hunter" />
          </div>
          <div>
            <img src={survivor} alt="survivor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
