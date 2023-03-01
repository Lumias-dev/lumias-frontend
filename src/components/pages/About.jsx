import React from "react";
import "./about.css";
import planetredbig from "../../assets/planetredbig.svg";
import planetbluebig from "../../assets/planetbluebig.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>Lumias Team</h1>
        <p>
          Be the first one to enjoy news, all the latest updates <br /> of our
          platforms and not miss any deal
        </p>
      </div>
      <div className="about-images">
        <img src={planetbluebig} className="blue" />
        <img src={planetredbig} className="red" />
      </div>
      <div className="about-details">
        <h1>Mission</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod
          blanditiis explicabo aliquam exercitationem ipsam consequatur minima.
          Architecto, a dolorem! Quisquam voluptate est, enim itaque soluta
          exercitationem ut? Unde, debitis? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nostrum sit officia nesciunt doloremque
          tempore asperiores illum illo, error optio nisi? Rem officia cum nisi
          ea repellat iste illum deleniti dignissimos. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Qui porro neque nemo laboriosam
          aut, dolorem perferendis accusamus animi nobis earum fugiat ea odit,
          repellat, facilis ex esse? Natus, obcaecati veritatis?
        </p>
        <h1>Why Lumias</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          libero quae sint fuga itaque consectetur iste, neque excepturi iure
          distinctio natus atque architecto perspiciatis amet eaque expedita, et
          numquam. Similique.
        </p>
      </div>
      <div className="about-roadmap">
        <p>Developers</p>
        <hr className="about-roadmap-hr" />
        <p>Lumias</p>
        <hr className="about-roadmap-hr" />
        <p>Marketplace / Game</p>
      </div>
      <div className="about-description">
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

export default About;
