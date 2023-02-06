import { Parallax } from "react-parallax";
import carpetClean from "../../app/assets/img/1920c.jpg";

const ImageParallaxTwo = () => {
  return (
    <Parallax
      className="image-parallax"
      bgImage={carpetClean}
      bgImageAlt="carpet cleaning services phoenix az"
      strength={400}
    ></Parallax>
  );
};

export default ImageParallaxTwo;
