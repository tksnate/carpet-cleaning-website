import { Parallax } from "react-parallax";
import hero from "../../app/assets/img/1920.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Tooltip } from "reactstrap";
import ModalExample from "../quotes/CarpetCleaningQuote";

const ImageParallax = () => {
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

            {/* <Button color="warning" href="contact" id="TooltipExample">
              Get Carpet Cleaning Quote
            </Button> */}
            {/* <Tooltip placement="right" target="TooltipExample">
              $90 Special Offer
            </Tooltip> */}
            <ModalExample />
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default ImageParallax;
