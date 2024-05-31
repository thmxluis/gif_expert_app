import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hook/useFetchGifs";

import PropTypes from "prop-types";

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <p>Cargando...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};


GiftGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
