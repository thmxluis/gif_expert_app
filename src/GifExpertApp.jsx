import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Samurai X", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories([...categories, "HunterXHunter"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
