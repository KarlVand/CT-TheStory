import styles from "../scss/gallery.module.scss";

const Gallery = () => {
  return (
    <main className="flex w-screen h-screen bg-blue-500 flex-col">
      <section className={styles.display}>image here</section>
      <aside>
        <section className={styles.choice}>
          <img
            className={styles.thumbnail}
            src=""
            alt="character1"
          />
          <img
            className={styles.thumbnail}
            src=""
            alt="character2"
          />
          <img
            className={styles.thumbnail}
            src=""
            alt="character3"
          />
          <img
            className={styles.thumbnail}
            src=""
            alt="character4"
          />
          <img
            className={styles.thumbnail}
            src=""
            alt="character1"
          />
          <img
            className={styles.thumbnail}
            src=""
            alt="character2"
          />
          <img
            className={styles.thumbnail}
            src=""
            alt="character3"
          />
          <img
            className={styles.thumbnail}
            src=""
            alt="character4"
          />
        </section>
      </aside>
    </main>
  );
};

export default Gallery;
