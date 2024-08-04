import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className="navbar">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>

        {isLoggedIn && (
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
