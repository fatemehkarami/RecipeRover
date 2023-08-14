import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Recipe from "./pages/Recipe/Recipe";
import Search from "./pages/Search/Search";
import Navbar from "./components/Navbar";
import { SearchTermContext } from "./components/SearchTermContext";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/recipe/:id" element={<Recipe />}></Route>
          </Routes>
        </Router>
      </SearchTermContext.Provider>
    </div>
  );
}

export default App;
