import React, { useContext } from "react";
import { RecipeContext } from "../App";
import IngredientsList from "./IngredientsList";

// name: "Plain Chicken",
// serving: 3,
// cookTime: "1:45",
// instruction:

export default function Recipe({
  id,
  name,
  servings,
  cookTime,
  instructions,
  ingredients,
}) {
  const { handleRecipeDelete, handleRecipeEditBtn } = useContext(RecipeContext);

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3>{name}</h3>
        <div>
          <button
            onClick={() => handleRecipeEditBtn(id)}
            className="btn btn--primary mr-1"
          >
            Edit
          </button>
          <button
            onClick={() => handleRecipeDelete(id)}
            className="btn btn--danger"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instruction</span>
        <div className="recipe__value recipe__value--indented recipe__instruction">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientsList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
