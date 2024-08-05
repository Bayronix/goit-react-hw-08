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
              className={({ isActive }) =>
                isActive
                  ? `${styles["nav-link"]} ${styles.active}`
                  : styles["nav-link"]
              }
            >
              SignIn
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? `${styles["nav-link"]} ${styles.active}`
                  : styles["nav-link"]
              }
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
