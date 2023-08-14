import RecipeList from "../../components/RecipeList";
import useFetch from "../../components/hooks/useFetch";

import "./Home.css";

const Home = () => {
  const { recipes, loading, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div>
      <RecipeList recipes={recipes} error={error} loading={loading} />
    </div>
  );
};

export default Home;
