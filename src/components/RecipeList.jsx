import React, { useContext } from "react";
import { RecipeContext } from "../App";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext);
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} {...recipe} />
        ))}
      </div>
      <div className="recipe-list__add-recipe-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add recipe
        </button>
      </div>
    </div>
  );
}
