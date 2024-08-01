import { NavLink } from "react-router-dom";

const NavBarAuth = () => {
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
            <NavLink to="/logout">LogOut</NavLink>
            {/* Має за  isLoggedIn: false, появлятися або зникати логін*/}
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default NavBarAuth;
