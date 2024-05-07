import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Samurai X", "Dragon Ball"]);
  // console.log(categories);
  return (
    <>
      <h1>GifExpertApp</h1>

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
