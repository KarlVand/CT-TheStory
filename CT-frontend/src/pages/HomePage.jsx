import "../scss/homepage.scss";

import Skyline from "../assets/images/scraperunsplash.webp";
import Character from "../assets/images/gallery/nelson01.webp";
import { useRef } from "react";

import gsap from "gsap/gsap-core";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

const HomePage = () => {
  const logoTitle = useRef();
  /* ----- LOAD IN ----- */

  useGSAP(() => {
    gsap.fromTo(
      logoTitle.current,
      {
        y: 50,
        scale: 0.1,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 3.5,
        delay: 1,
        ease: "easeIn",
      }
    );
    /* ----- SCROLL TRIGGER ----- */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: logoTitle.current,
        start: "top 24%",
        end: "top 4rem",
        markers: true,
        scrub: true,
      },
    });

    tl.to(logoTitle.current, {
      scale: 0.25,
      opacity: 0,
      duration: 1.5,
      pin: true,
      pinSpacing: true,
      ease: "none",
    });
  });

  return (
    <main>
      <div className="animGroup">
        <div className="bgSky">
          <h1 ref={logoTitle}>Crispy Tender</h1>
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
