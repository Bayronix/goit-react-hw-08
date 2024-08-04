import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut()).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <h3 className="navbar-title">Welcome, {user.name}</h3>
      <ul className="nav-list">
        <li>
          <button type="button" onClick={handleLogout}>
            LogOut
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
