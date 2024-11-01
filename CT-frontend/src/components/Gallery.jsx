import styles from "../scss/gallery.module.scss";
import Thumb from "../assets/images/galleryThumbnails/thumbExample.png";
import Nelson from "../assets/images/nelson01.webp";

const Gallery = () => {
  const images = [
    { Thumb },
    { Thumb },
    { Thumb },
    { Thumb },
    { Thumb },
    { Thumb },
    { Thumb },
    { Thumb },
  ];
  return (
    <main className={styles.main}>
      <galleryCharacters />
      <section className={styles.display}>
        <h1 className={styles.charName}>Name Title</h1>
        <img
          className={styles.displayImage}
          src={Nelson}
          alt="nelson"
        />
        <p className={styles.charDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est quas
          praesentium dignissimos totam. A natus reiciendis officia esse culpa
          molestias ex, ad dolorum assumenda, omnis eum nesciunt.
        </p>
      </section>
      <aside>
        <section className={styles.choice}>
          {images.map((src, index) => (
            <div
              key={index}
              className={styles.thumbnail}>
              <img
                src={Thumb}
                alt={`Thumbnail ${index + 1}`}
              />
            </div>
          ))}
        </section>
      </aside>
    </main>
  );
};

export default Gallery;
