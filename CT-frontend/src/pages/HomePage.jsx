import "../scss/homepage.scss";

import Skyline from "../assets/images/scraperunsplash.webp";
import Character from "../assets/images/gallery/3_chef.webp";

import { useRef } from "react";
import gsap from "gsap/gsap-core";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

const HomePage = () => {
  const logoTitle = useRef();
  const skyline = useRef();
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
        start: "top 30%",
        end: "bottom top",

        markers: true,
        scrub: true,
      },
    });

    tl.to(logoTitle.current, {
      scale: 0.25,
      opacity: 0,
      start: "top 60%",
      scrub: true,
      ease: "none",
    });
    tl.fromTo(
      skyline.current,
      { y: 0 },
      {
        y: -100,
        pin: true,
        start: "top 60%",
        end: "+=300",
        scrub: true,
      }
    );
    tl.to(".character", {
      y: -2000,
      start: "top 60%",
      end: "top 20%",
      scrub: true,
    });
  });

  return (
    <main>
      <div className="animGroup">
        <div className="bgSky">
          <h1 ref={logoTitle}>Crispy Tender</h1>
        </div>

        <div
          className="skyline"
          ref={skyline}>
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
