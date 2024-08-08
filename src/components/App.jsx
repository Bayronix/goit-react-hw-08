import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import RestrictedRoute from "./RestrictedMode/RestrictedMode";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { SquareLoader } from "react-spinners";
import css from "./App.module.css";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={css.loader}>
      <SquareLoader color="grey" size={25} speedMultiplier={2} />
    </div>
  ) : (
    <Layout>
      <Suspense
        fallback={
          <div className={css.loader}>
            <SquareLoader color="grey" size={25} speedMultiplier={2} />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signIn"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                element={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" element={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
