import React from "react";
import "./docs.css";
import planetredbig from "../../assets/planetredbig.svg";
import planetbluebig from "../../assets/planetbluebig.svg";

const Docs = () => {
  return (
    <div className="docs">
      <div className="docs-header">
        <h1>Documentation</h1>
        <p>All the documentation right here</p>
      </div>
      <div className="docs-images">
        <img src={planetbluebig} className="blue" />
        <img src={planetredbig} className="red" />
      </div>
    </div>
  );
};

export default Docs;
