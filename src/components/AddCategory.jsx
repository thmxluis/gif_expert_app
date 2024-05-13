import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  const onHangleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());

    setInputValue("");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());

    setInputValue("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={(event) => onInputChange(event)} />
    </form>
  );
};
