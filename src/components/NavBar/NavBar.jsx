import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
        <h3 className="navbar-title">Your Name</h3>
        <ul className="nav-list">
          <li>
            <NavLink to="/signIn">SingIn</NavLink>
          </li>
          <li>
            <NavLink to="/login">LogIn</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default NavBar;
