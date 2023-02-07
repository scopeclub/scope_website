import "./Gallery.css";
import gallerydata from "../../Assets/Data/GalleryData.json";

function Gallery() {
  return (
    <div className="g-body">
      <div class="container">
        <h1 class="titlee">Glimpses!</h1>

        <div class="image-container">
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
        </div>
      </div>
    </div>
  );
}

export default Gallery;
