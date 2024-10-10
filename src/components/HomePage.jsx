import "../scss/homepage.scss";
import { motion, useScroll, useTransform } from "framer-motion";

import Background from "../assets/images/Skyunsplash.webp";
import Skyline from "../assets/images/scraperunsplash.webp";
import Character from "../assets/images/nelson01.webp";

const HomePage = () => {
  const { scrollY } = useScroll();

  const skySpeed = 0.9;
  const skylineSpeed = 0.8;
  const characterSpeed = 0.1;

  const ySky = useTransform(scrollY, [0, 1000], [0, 1000 * skySpeed]);
  const ySkyline = useTransform(scrollY, [0, 1000], [0, 1000 * skylineSpeed]);
  const yCharacter = useTransform(
    scrollY,
    [0, 1000],
    [850, 1000 * characterSpeed]
  );

  return (
    <div className="main">
      <motion.div
        style={{ y: ySky }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 5 }}
        exit={{ opacity: 0 }}
        className="bgSky">
        <img
          src={Background}
          alt="sky"></img>
        <h1>Home Page</h1>
      </motion.div>

      <motion.div
        className="skyline"
        style={{ y: ySkyline }}>
        <img
          src={Skyline}
          alt="scrapers"
        />
      </motion.div>

      <motion.div
        style={{ y: yCharacter }}
        className="character">
        <img
          src={Character}
          alt="character"
        />
      </motion.div>
    </div>
  );
};

export default HomePage;
