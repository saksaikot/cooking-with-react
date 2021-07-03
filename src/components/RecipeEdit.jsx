import React, { useContext } from "react";
import { RecipeContext } from "../App";
import RecipeEditIngredients from "./RecipeEditIngredients";

export default function RecipeEdit({ recipe }) {
  const { name, servings, cookTime, instructions, ingredients } = recipe;
  const { handleRecipeChange } = useContext(RecipeContext);

  function handleOnChange(e) {
    const { name, value } = e.target;
    const newRecipe = { ...recipe };
    newRecipe[name] = value;
    handleRecipeChange(newRecipe);
  }

  function handleIngredientsChange(ingredient) {
    const newRecipe = { ...recipe };
    const index = newRecipe.ingredients.findIndex(
      (i) => i.id === ingredient.id
    );
    newRecipe.ingredients[index] = ingredient;
    handleRecipeChange(newRecipe);
  }
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__close-btn-container">
        <button class="btn recipe-edit__close-btn">&times;</button>
      </div>
      <form onChange={handleOnChange}>
        <div className="recipe-edit__details-grid">
          <label htmlFor="name" className="recipe-edit__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            className="recipe-edit__input"
          />
          <label htmlFor="cookTime" className="recipe-edit__label">
            Cook Time
          </label>
          <input
            type="text"
            name="cookTime"
            value={cookTime}
            id="cookTime"
            className="recipe-edit__input"
          />
          <label htmlFor="servings" className="recipe-edit__label">
            Servings
          </label>
          <input
            type="number"
            min="1"
            id="servings"
            name="servings"
            value={servings}
            className="recipe-edit__input"
          />
          <label htmlFor="instructions" className="recipe-edit__label">
            Instruction
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={instructions}
            className="recipe-edit__input"
          />
        </div>
      </form>
      <div>
        <label className="recipe-edit__label">Ingredients</label>
        <div className="recipe-edit__ingredients-grid">
          <div>Name</div>
          <div>Amount</div>
          <div></div>
          {ingredients.map((ingredient) => (
            <RecipeEditIngredients
              ingredient={ingredient}
              key={ingredient.id}
              handleIngredientsChange={handleIngredientsChange}
            />
          ))}
        </div>
        <div className="recipe-edit__add-ingredient-btn-container">
          <button class="btn btn--primary ">Add Ingredient</button>
        </div>
      </div>
    </div>
  );
}
