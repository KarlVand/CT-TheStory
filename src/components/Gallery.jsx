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
    <main className="flex w-screen h-screen bg-blue-500 flex-col md:flex-row">
      <section className={styles.display}>image here</section>
      <aside className="flex space-x-4 p-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-none w-[30vw] max-w-[150px] aspect-square">
            <img
              src={Thumb}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </aside>
    </main>
  );
};

export default Gallery;
