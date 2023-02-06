import { Parallax } from "react-parallax";
import hero from "../../app/assets/img/1920.jpg";

const ImageParallax = () => {
  return (
    <Parallax
      className="image-parallax"
      bgImage={hero}
      bgImageAlt="carpet cleaning services glendale az"
      strength={400}
    >
      <div className="content">
        <h2 className="img-txt">
          Professional Carpet Cleaning & Stain Removal Services
        </h2>
      </div>
    </Parallax>
  );
};

export default ImageParallax;
