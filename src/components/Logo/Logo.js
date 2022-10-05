import React from "react";
import Tilt from "react-tilt";
import BrainImg from "./robot.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="center pa5">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 220, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img
            style={{
              paddingTop: "5px",
              resizeMode: "contain",
            }}
            src={BrainImg}
            alt=""
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
