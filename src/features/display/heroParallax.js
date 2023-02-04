import { Parallax } from "react-parallax";
import hero from "../../app/assets/img/hero.jpg";

const ImageParallax = () => {
  <Parallax
    className="image-parallax"
    bgImage={hero}
    bgImageAlt="carpet cleaning services glendale az"
    strength={800}
  >
    <div className="content">
      <span className="img-text">Carpet Cleaning</span>
    </div>
  </Parallax>;
};

export default ImageParallax;
