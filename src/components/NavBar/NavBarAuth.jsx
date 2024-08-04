import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const NavBarAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logOut()).then(() => {
      navigate("/");
    });
  };

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
        {isLoggedIn && (
          <ul className="nav-list">
            <li>
              <button type="button" onClick={handleLogout}>
                LogOut
              </button>
            </li>
          </ul>
        )}
      </nav>
      <hr />
    </header>
  );
};

export default NavBarAuth;
