import { useState, useEffect } from "react";

import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
