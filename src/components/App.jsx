import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import Layout from "./Layout/Layout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import RestrictedRoute from "./RestrictedMode/RestrictedMode";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={<PrivateRoute element={<ContactsPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute element={<LoginPage />} />}
          />
          <Route
            path="/signIn"
            element={<RestrictedRoute element={<RegistrationPage />} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
