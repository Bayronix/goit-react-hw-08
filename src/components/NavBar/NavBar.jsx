import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
        <h3 className="navbar-title">Your Name</h3>
        <ul className="nav-list">
          <li>
            <NavLink to="/singIn">SingIn</NavLink>
          </li>
          <li>
            <NavLink to="/login">LogIn</NavLink>
          </li>
          <li>
            <NavLink to="/logout">LogOut</NavLink>
            {/* Має за  isLoggedIn: false, появлятися або зникати логін*/}
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default NavBar;
