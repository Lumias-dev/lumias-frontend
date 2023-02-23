import React from "react";
import "./updates.css";
import updates1 from "../../../assets/updates1.svg";
import updates2 from "../../../assets/updates2.svg";

const Updates = () => {
  return (
    <div className="updates">
      <div className="updates-header">
        <h1>Updates!</h1>
        <button type="">Explore</button>
      </div>
      <p>Please update your client to 2.0.1 to enjoy these features</p>
      <div className="updates-container">
        <div>
          <img src={updates1} alt="left image" />
          <p>One chain friends can now share achievements</p>
          <p2>Version 2.0.1</p2>
        </div>
        <div>
          <img src={updates2} alt="right image" />
          <p>New staking pools for deifi nerds</p>
          <p2>Version 2.0.2</p2>
        </div>
      </div>
    </div>
  );
};

export default Updates;
