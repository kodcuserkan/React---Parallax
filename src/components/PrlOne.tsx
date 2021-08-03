import { Parallax, Background } from "react-parallax";

const ParallaxOne = () => (
  <div className="image">
    <Parallax blur={6} bgImage="ape.jpg" bgImageAlt="the cat" strength={-200}>
      <div className="inner" />
    </Parallax>
    <Parallax
      blur={{ min: -10, max: 10 }}
      bgImage={"dog.jpg"}
      bgImageAlt="the dog"
      strength={100}
    >
      <div className="inner" />
    </Parallax>
    <Parallax
      bgImage="lion.jpg"
      renderLayer={(percentage) => (
        <div
          className="elephant"
          style={{
            width: percentage * 500,
            height: percentage * 500,
          }}
        >
          <img className="baby" src="baby.jpg" alt="baby" />
        </div>
      )}
    >
      <div className="inner"></div>
    </Parallax>
  </div>
);

export default ParallaxOne;
