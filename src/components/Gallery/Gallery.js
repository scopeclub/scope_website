import "./Gallery.css";
import gallerydata from "../../Assets/Data/GalleryData.json";
import { motion } from "framer-motion";

function Gallery() {
  return (
    <motion.div
      className="g-body"
      initial={{ y: 1, scale: 1, opacity: 0 }}
      animate={{
        y: "20px",
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
      
    >
      <div class="container">
        <h1 class="titlee">Glimpses!</h1>

        <motion.div class="image-container">
          {gallerydata.map((g) => (
            <div class="wg-box-content">
              <a href="#">
                <div class="wg-box-content-overlay"></div>
                <img class="wg-box-content-image" src={g.img} />
                <div class="wg-box-content-details wg-box-fadeIn-bottom">
                  <h3 class="wg-box-content-title">{g.eventName}</h3>
                </div>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Gallery;
