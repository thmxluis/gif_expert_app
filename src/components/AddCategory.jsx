import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("One Punch");
  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setCategories((categories) => [inputValue, ...categories]);

    setInputValue("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={(event) => onInputChange(event)} />
    </form>
  );
};
