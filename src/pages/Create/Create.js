import { useEffect, useState } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      title,
      ingredients,
      method,
      cookingTime,
    };

    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
    navigate("/");
  };

  const handleAddIngredients = (event) => {
    const uniqueIngredients = Array.from(
      new Set(event.target.value.split(","))
    );
    setIngredients(uniqueIngredients);
  };

  return (
    <div>
      <h2 className="formTitle">Add a new recipe</h2>
      <form className="create" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={(event) => setTitle(event.target.value)}
          required
        ></input>
        <label htmlFor="ingredients">Ingredients</label>
        <input
          type="text"
          id="ingredients"
          onChange={(event) => handleAddIngredients(event)}
          required
        ></input>
        <label htmlFor="method">Method</label>
        <input
          type="text"
          id="method"
          onChange={(event) => setMethod(event.target.value)}
          required
        ></input>
        <label htmlFor="cookingTime">Cooking Time</label>
        <input
          type="text"
          id="cookingTime"
          onChange={(event) => setCookingTime(event.target.value)}
          required
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
