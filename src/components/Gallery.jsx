import styles from "../scss/gallery.module.scss";
import Thumb from "../assets/images/galleryThumbnails/thumbExample.png";

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
    <main>
      <section className={styles.display}>image here</section>
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
