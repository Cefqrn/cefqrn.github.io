import { NavLink, Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="title">Cefqrn</Link>
      <NavLink to="/" className="navlink">Home</NavLink>
      <NavLink to="/Projects" className="navlink">Projects</NavLink>
    </nav>
  );
}

export default Navbar;
