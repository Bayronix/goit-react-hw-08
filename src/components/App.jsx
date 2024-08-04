import { Route, Routes } from "react-router";
import ContactsPage from "./Contacts/ContactsPage";
import NavBar from "./NavBar/NavBar";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import NavBarAuth from "./NavBar/NavBarAuth";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("Is Logged In:", isLoggedIn);
  return (
    <div>
      {isLoggedIn ? <NavBarAuth /> : <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route
          path="/login"
          element={isLoggedIn ? <HomePage /> : <LoginPage />}
        />
        <Route
          path="/signIn"
          element={isLoggedIn ? <HomePage /> : <RegistrationPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
