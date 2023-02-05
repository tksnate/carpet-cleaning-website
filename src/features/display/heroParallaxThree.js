import { Parallax } from "react-parallax";
import carpetCleaning from "../../app/assets/img/carpet-cleaning-phx.jpg";

const ImageParallaxThree = () => {
  return (
    <Parallax
      className="image-parallax"
      bgImage={carpetCleaning}
      bgImageAlt="carpet cleaning stain removal professionals"
      strength={500}
    ></Parallax>
  );
};

export default ImageParallaxThree;
