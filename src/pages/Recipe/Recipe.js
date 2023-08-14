import { useParams } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import "./Recipe.css";
const Recipe = () => {
  const { id } = useParams();
  const { recipes, loading, error } = useFetch("http://localhost:3000/recipes");
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error}</div>;
  } else {
    const result = recipes.find((recipe, index) => recipe.id === id);
    if (!result) {
      return <div>not found</div>;
    } else {
      return (
        <div className="recipe">
          <h2>{result.title}</h2>
          <p>cookingTime: {result.cookingTime}</p>
          <ul>
            {result.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{result.method}</p>
        </div>
      );
    }
  }
};

export default Recipe;
