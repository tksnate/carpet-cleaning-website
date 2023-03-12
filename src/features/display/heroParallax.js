import { Parallax } from "react-parallax";
import hero from "../../app/assets/img/1920.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import HeroModal from "../quotes/CarpetCleaningQuote";

const HeroParallax = () => {
  return (
    <>
      <Parallax
        className="image-parallax"
        bgImage={hero}
        bgImageAlt="carpet cleaning services glendale az"
        strength={400}
      >
        <div className="content">
          <div className="container">
            <h2 className="img-txt">
              Experienced Professionals. Affordable Prices.
            </h2>
            <HeroModal />
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default HeroParallax;
