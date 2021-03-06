import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientsList({ ingredients }) {
  return (
    <div className="ingredient-grid">
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} {...ingredient} />
      ))}
    </div>
  );
}
