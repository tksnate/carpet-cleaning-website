import { Parallax } from "react-parallax";
import hero from "../../app/assets/img/hero.jpg";

const ImageParallax = () => {
  return (
    <Parallax
      className="image-parallax"
      bgImage={hero}
      bgImageAlt="carpet cleaning services glendale az"
      strength={500}
    ></Parallax>
  );
};

export default ImageParallax;
