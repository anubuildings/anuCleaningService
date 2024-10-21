import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
//import "react-image-lightbox/style.css";


const photos = [
  "/img/images/about_img01.jpg",
  "/img/images/apartment-cleaning.jpg",
  "/img/images/steam-carpet.jpg",
  "/img/images/apartment-cleaning.jpg",
  "/img/images/download_bg.jpg",
  "/img/images/estimate_img.jpg",
  "/img/images/post-construction-cleaning.png",
  "/img/images/steam-carpet.jpg",
  // Add more images
];

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MyGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [shuffledPhotos, setShuffledPhotos] = useState([]);
 
  useEffect(() => {
    setShuffledPhotos(shuffleArray(photos));
  }, []);

  const breakpointColumnsObj = {
    default: 3, // 3 columns
    1100: 2,    // 2 columns for screens < 1100px
    700: 1      // 1 column for screens < 700px
  };

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            style={{ width: "100%", cursor: "pointer", marginBottom: "10px" }}
            //onClick={() => openLightbox(index)}
          />
        ))}
      </Masonry>

     
    </div>
  );
};

export default MyGallery;
