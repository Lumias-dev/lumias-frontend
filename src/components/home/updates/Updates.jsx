import React from "react";
import "./updates.css";
import updates1 from "../../../assets/updates1.svg";
import updates2 from "../../../assets/updates2.svg";

const Updates = () => {
  return (
    <div className="updates">
      <h1>Updates!</h1>
      <p>Please update your client to 2.0.1 to enjoy these features</p>
      <div className="updates-explore">
        <button type="">Explore</button>
      </div>
      <div className="updates-container">
        <img src={updates1} alt="left image" />
        <img src={updates2} alt="right image" />
        <div className="updates-container-statement">
          <p>One chain friends can now share achievements</p>
          <p>New staking pools for deifi nerds</p>
        </div>
      </div>
    </div>
  );
};

export default Updates;
