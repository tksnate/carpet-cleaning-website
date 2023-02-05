import { Parallax } from "react-parallax";
import { render } from "react-dom";
import React from "react";
import hero from "../../app/assets/img/hero.jpg";
import pic from "../../app/assets/img/react-lake.jpg";

const inlineStyle = {
  background: "blue",
  left: "50%",
  top: "50%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
};

const ParallaxTest = () => {
  return (
    <div>
      <Parallax bgImage={hero} strength={500}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>HTML inside parallax</div>
        </div>
      </Parallax>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default ParallaxTest;
