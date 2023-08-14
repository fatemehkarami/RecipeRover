import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchTermContext } from "./SearchTermContext";
import "./Searchbar.css";


const Searchbar = () => {
  const [term, setTerm] = useState("");
  const { searchTerm, setSearchTerm } = useContext(SearchTermContext);
  const navigate = useNavigate();

  const handleSearchRecipe = (event) => {
    setTerm(event.target.value);
  };

  const handleClickSearch = () => {
    setSearchTerm(term);
    navigate("/Search/");
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        id="search-recipe"
        onChange={(event) => {
          handleSearchRecipe(event);
        }}
      ></input>
      <button onClick={handleClickSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
