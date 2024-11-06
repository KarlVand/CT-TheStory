import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import styles from "../scss/gallery.module.scss";
import Thumb from "../assets/images/gallery/thumbnails/thumbExample.png";
import Charlie from "../assets/images/gallery/nelson01.webp";
import Brook from "../assets/images/gallery/nelson02.webp";
import Chef from "../assets/images/gallery/nelson03.webp";
import Jeff from "../assets/images/gallery/nelson04.webp";
import Will from "../assets/images/gallery/nelson05.webp";
import Sonya from "../assets/images/gallery/nelson06.webp";
import Nelson6 from "../assets/images/gallery/nelson07.webp";
import Nelson7 from "../assets/images/gallery/nelson08.webp";

/* ------------------------------------------------ CHARACTER DATA (hardcoded) ----------------- */
const characterData = [
  {
    id: 1,
    name: "Charlie",
    thumb: Thumb,
    image: Charlie,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est quas praesentium dignissimos totam. A natus reiciendis officia esse culpa molestias ex, ad dolorum assumenda, omnis eum nesciunt.",
  },

  {
    id: 2,
    name: "Brook",
    thumb: Thumb,
    image: Brook,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est quas praesentium dignissimos totam. A natus reiciendis officia esse culpa molestias ex, ad dolorum assumenda, omnis eum nesciunt.",
  },
  {
    id: 3,
    name: "Chef",
    thumb: Thumb,
    image: Chef,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est quas praesentium dignissimos totam. A natus reiciendis officia esse culpa molestias ex, ad dolorum assumenda, omnis eum nesciunt.",
  },
  {
    id: 4,
    name: "Jeff",
    thumb: Thumb,
    image: Jeff,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est quas praesentium dignissimos totam. A natus reiciendis officia esse culpa molestias ex, ad dolorum assumenda, omnis eum nesciunt.",
  },
  {
    id: 5,
    name: "Will",
    thumb: Thumb,
    image: Will,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est quas praesentium dignissimos totam. A natus reiciendis officia esse culpa molestias ex, ad dolorum assumenda, omnis eum nesciunt.",
  },
  {
    id: 6,
    name: "Sonya",
    thumb: Thumb,
    image: Sonya,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est quas praesentium dignissimos totam. A natus reiciendis officia esse culpa molestias ex, ad dolorum assumenda, omnis eum nesciunt.",
  },
  {
    id: 7,
    name: "Nelson",
    thumb: Thumb,
    image: Nelson6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est quas praes",
  },
  {
    id: 8,
    name: "Nelson",
    thumb: Thumb,
    image: Nelson7,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est quas praesentium dignissimos totam. A natus reiciendis officia esse culpa molestias ex, ad dolorum assumenda, omnis eum nesciunt.",
  },
];

gsap.registerPlugin(useGSAP);

/* ------------------------------------------------------------------------------------------------- COMPONENT --------- */
const Gallery = () => {
  const [selectedChar, setSelectedChar] = useState(characterData[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  /* const [disappear, setDisappear] = useState(false); */

  const name = useRef();
  const description = useRef();
  const image = useRef();

  const handleChange = async character => {
    console.log("1. handleChange started", {
      isAnimating,
      currentChar: selectedChar.name,
      newChar: character.name,
    });

    if (isAnimating || character.id === selectedChar.id) {
      console.log("Animation blocked:", {
        isAnimating,
        isSameChar: character.id === selectedChar.id,
      });
      return;
    }

    setIsAnimating(true);
    console.log("2. Set isAnimating to true");

    const mainTimeline = gsap.timeline({
      onStart: () => {
        console.log("Main timeline started");
      },
      onComplete: () => {
        console.log("Main timeline completed");
        setIsAnimating(false);
      },
    });

    mainTimeline
      .from(disappearAnim(), console.log("Disappear animation added"))
      .call(() => {
        console.log("About to update character state to:", character.name);
        setSelectedChar(character);
      })
      .set({}, {}, "+=0.05")
      .from(appearAnim(), ">");

    console.log("Main timeline setup complete");
  };

  const appearAnim = () => {
    console.log("Appear animation creating");
    const timeline = gsap.timeline({
      onStart: () => console.log("Appear animation starting"),
      onComplete: () => console.log("Appear animation completed"),
    });

    return timeline
      .fromTo(
        name.current,
        {
          y: -500,
          x: 0,
          alpha: 0,
        },
        {
          y: 0,
          x: 0,
          alpha: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      )
      .fromTo(
        description.current,
        {
          y: 300,
          opacity: 0,
        },
        {
          y: 0,
          alpha: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.1"
      )
      .fromTo(
        image.current,
        {
          x: -900,
          y: 300,
          rotation: -90,
          alpha: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          alpha: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );
  };

  const disappearAnim = () => {
    console.log("Disappear animation creating");
    const timeline = gsap.timeline({
      onStart: () => console.log("Disappear animation starting"),
      onComplete: () => console.log("Disappear animation completed"),
    });

    return timeline
      .to(name.current, {
        x: 200,
        alpha: 0,
        duration: 0.2,
        ease: "power2.in",
      })
      .to(
        description.current,
        {
          y: 500,
          alpha: 0,
          duration: 0.2,
          ease: "power2.in",
        },
        "-=0.1"
      )
      .to(
        image.current,
        {
          x: 900,
          y: 900,
          rotation: 90,
          alpha: 0,
          duration: 0.2,
          ease: "power2.in",
        },
        "-=0.1"
      );
  };

  // Log whenever selectedChar changes
  useEffect(() => {
    console.log("Selected character updated to:", selectedChar.name);
  }, [selectedChar]);

  return (
    <main className={styles.main}>
      <section className={styles.display}>
        <section
          ref={name}
          className={styles.titleContainer}>
          <h1 className={styles.charName}>{selectedChar.name}</h1>
        </section>
        <section
          ref={image}
          className={styles.imgContainer}>
          <img
            className={styles.displayImage}
            src={selectedChar.image}
            alt={selectedChar.name}
          />
        </section>
        <section
          ref={description}
          className={styles.descriptionContainer}>
          <p className={styles.charDescription}>{selectedChar.description}</p>
        </section>
      </section>
      <aside className={styles.aside}>
        <section className={styles.choice}>
          {characterData.map(character => (
            <button
              key={character.id}
              onClick={() => handleChange(character)}
              disabled={isAnimating}
              className={`${styles.thumbnail} ${
                selectedChar.id === character.id ? styles.active : ""
              }`}>
              <img
                src={character.thumb}
                alt={`Thumbnail ${character.id + 1}`}
              />
            </button>
          ))}
        </section>
      </aside>
    </main>
  );
};

export default Gallery;
