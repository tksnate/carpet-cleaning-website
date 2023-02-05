import { Parallax } from "react-parallax";
import carpetClean from "../../app/assets/img/carpet-cleaning-az.jpg";

const ImageParallaxTwo = () => {
  return (
    <Parallax
      className="image-parallax"
      bgImage={carpetClean}
      bgImageAlt="carpet cleaning services phoenix az"
      strength={500}
    ></Parallax>
  );
};

export default ImageParallaxTwo;
