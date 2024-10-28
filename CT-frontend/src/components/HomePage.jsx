import "../scss/homepage.scss";
/* import { motion, useScroll, useTransform } from "framer-motion"; */

import Background from "../assets/images/Skyunsplash.webp";
import Skyline from "../assets/images/scraperunsplash.webp";
import Character from "../assets/images/nelson01.webp";

const HomePage = () => {
  return (
    <main>
      <div className="animGroup">
        <div className="bgSky">
          <img
            src={Background}
            alt="sky"></img>
          <h1>Crispy Tender</h1>
        </div>

        <div className="skyline">
          <img
            src={Skyline}
            alt="scrapers"
          />
        </div>
      </div>

      <div className="character">
        <img
          src={Character}
          alt="character"
        />
      </div>
      <div className="about">
        <h1>KARL.DEV</h1>
      </div>
    </main>
  );
};

export default HomePage;
