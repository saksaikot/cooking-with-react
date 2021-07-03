import React, { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import { v4 as uuidv4 } from "uuid";

import "./css/app.css";
import RecipeEdit from "./components/RecipeEdit";
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";
export const RecipeContext = React.createContext();
function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState([]);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const localRecipes = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localRecipes !== null) setRecipes(JSON.parse(localRecipes));
    else setRecipes(sampleRecipes);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);
  const RecipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeEditBtn,
    handleRecipeChange,
  };
  function handleRecipeChange(recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(
      (newRecipe) => newRecipe.id === recipe.id
    );
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }
  function handleRecipeEditBtn(id) {
    setSelectedRecipeId(id);
  }
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [
        {
          id: uuidv4(),
          name: "Name",
          amount: "1 Tbs ",
        },
      ],
    };
    setRecipes([...recipes, newRecipe]);
  }
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }
  return (
    <RecipeContext.Provider value={RecipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions:
      "1. Put paprika on pork\n2. put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs",
      },
    ],
  },
];

export default App;
