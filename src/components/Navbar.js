import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          Home
        </Link>
        <Searchbar />
        <Link to="/create">Create</Link>
      </nav>
    </div>
  );
};

export default Navbar;
