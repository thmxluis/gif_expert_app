import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map((img) => (
          <li key={img.id}>{img.title}</li>
        ))}
      </ol>
    </>
  );
};
