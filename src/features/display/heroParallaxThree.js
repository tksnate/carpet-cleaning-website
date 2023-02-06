import { Parallax } from "react-parallax";
import carpetCleaning from "../../app/assets/img/1920b.jpg";

const ImageParallaxThree = () => {
  return (
    <Parallax
      className="image-parallax"
      bgImage={carpetCleaning}
      bgImageAlt="carpet cleaning stain removal professionals"
      strength={400}
    ></Parallax>
  );
};

export default ImageParallaxThree;
