import React, { FunctionComponent } from "react";
import Social from "../Social";

interface IProps {
  shapeImage: string;
  heroImage: string;
  name: string;
  description: string;
}

const Hero: FunctionComponent<IProps> = ({
  shapeImage,
  heroImage,
  name,
  description,
}) => (
  //    HERO
  <div className="edina_tm_hero" id="home">
    <div className="content">
      <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
        <img
          src={`img/hero/${shapeImage}.svg`}
          srcSet={`img/hero/${heroImage}.jpg`}
          alt="hero image"
        />
      </div>
      <div className="extra">
        <h1
          className="name"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          {name}
        </h1>
        <p
          className="text"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          {description}
        </p>

        <div
          className="social"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <Social />
        </div>
        <div
          className="edina_tm_button"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <a href="mailto:angel@romerobaez.com" className="color">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
