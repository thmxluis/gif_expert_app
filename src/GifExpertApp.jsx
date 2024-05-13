import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GitGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Samurai X", "Dragon Ball"]);

  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return; // No repetir categorias

    setCategories([NewCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
