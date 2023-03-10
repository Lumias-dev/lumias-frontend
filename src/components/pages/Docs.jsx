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
        <img src={planetbluebig} height="800" width="800" className="blue" />
        <img src={planetredbig} height="800" width="800" className="red" />
      </div>
      <div className="docs-details">
        <h1>Whitepaper</h1>
        <p>You can download whitepaper directly</p>
        <button className="docs-details-whitepaper">
          <a
            href="https://lumias-research-labs.gitbook.io/lumias/"
            target="_blank"
          >
            Whitepaper
          </a>
        </button>
        <h1>Litepaper</h1>
        <p>You can download litepaper directly</p>
        <button className="docs-details-litepaper">
          <a
            href="https://lumias-research-labs.gitbook.io/lumias/lumias-app/features"
            target="_blank"
          >
            Litepaper
          </a>
        </button>
      </div>
      {/* <div className="docs-legal">
        <h1>Legal</h1>
        <p>You can download legal directly</p>
      </div> */}
      <div className="docs-description">
        <h1>Description</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.mollit anim id est laborum.mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Docs;
