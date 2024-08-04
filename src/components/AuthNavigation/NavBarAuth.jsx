import { NavLink } from "react-router-dom";

const AuthNavigation = () => {
  return (
    <header className="navbar">
      <nav>
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

export default AuthNavigation;
