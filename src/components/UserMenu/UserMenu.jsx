import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/operations";
import style from "./UserMenu.module.css";

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
    <div className={style.userMenu}>
      <h3 className={style.navbarTitle}>Welcome, {user.name}</h3>
      <ul className={style.navList}>
        <li>
          <button type="button" onClick={handleLogout}>
            LogOut
          </button>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
