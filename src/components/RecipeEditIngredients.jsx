import React from "react";

export default function RecipeEditIngredients({
  ingredient,
  handleIngredientsChange,
}) {
  const { name, amount } = ingredient;
  function handleOnChange(value) {
    handleIngredientsChange({ ...ingredient, ...value });
  }
  return (
    <>
      <input
        value={name}
        onChange={(e) => handleOnChange({ name: e.target.value })}
        className="recipe-edit__input"
        type="text"
      />
      <input
        value={amount}
        onChange={(e) => handleOnChange({ amount: e.target.value })}
        className="recipe-edit__input"
        type="text"
      />
      <button className="btn btn--danger">&times;</button>
    </>
  );
}
