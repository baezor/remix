import React, { FunctionComponent } from "react";
import Social from "../Social";

interface IProps {
  name: string;
  description: string;
}

const Hero: FunctionComponent<IProps> = ({ name, description }) => (
  //    HERO
  <div className="edina_tm_hero" id="home">
    <div className="content">
      <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
        <img
          srcSet={`img/hero/angelromerobaez-400w.jpg 2x`}
          width="200"
          height="200"
          src={`img/hero/angelromerobaez-200w.jpg`}
          alt="Angel Romero Baez"
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
