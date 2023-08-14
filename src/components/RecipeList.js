import { Link } from "react-router-dom";
import "./RecipeList.css";

const RecipeList = (props) => {
  if (props.loading) {
    return <div>is Loading...</div>;
  } else if (props.error) {
    return <div>{props.error}</div>;
  } else if (!props.recipes) {
    return <div>No recipes available.</div>;
  } else {
    return (
      <div className="recipe-list">
        {props.recipes.map((recipe, index) => {
          return (
            <div key={index} className="card">
              <h3>{recipe.title}</h3>
              <p>cookingTime: {recipe.cookingTime}</p>
              <p className="method">{recipe.method.substring(0, 100)} ...</p>

              <Link to={`/recipe/${recipe.id}`}>How to cook</Link>
            </div>
          );
        })}
      </div>
    );
  }
};

export default RecipeList;
