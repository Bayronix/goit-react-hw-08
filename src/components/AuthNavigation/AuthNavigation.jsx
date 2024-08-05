import { NavLink } from "react-router-dom";
import styles from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul className={styles["nav-list"]}>
          <li>
            <NavLink
              to="/signIn"
              className={styles["nav-link"]}
              activeClassName={styles.active}
            >
              SignIn
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={styles["nav-link"]}
              activeClassName={styles.active}
            >
              LogIn
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default AuthNavigation;
