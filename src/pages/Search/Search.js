import { useContext } from "react";
import { SearchTermContext } from "../../components/SearchTermContext";
import RecipeList from "../../components/RecipeList";
import useFetch from "../../components/hooks/useFetch";
import "./Search.css";

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchTermContext);
  const { recipes, loading, error } = useFetch(
    `http://localhost:3000/recipes?q=${searchTerm}`
  );
  return (
    <div>
      <RecipeList recipes={recipes} error={error} loading={loading} />
    </div>
  );
};

export default Search;
