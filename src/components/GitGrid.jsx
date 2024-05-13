const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=7nAy1xfk5t1An9zcEeomSiXyTsh8jsQR`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    };
  });
  console.log(gifs);
};

export const GiftGrid = ({ category }) => {
  getGifs(category);
  return (
    <>
      <h3>{category}</h3>
      <p>Hola mundo</p>
    </>
  );
};
