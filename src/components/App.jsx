import { Route, Routes } from "react-router";
import ContactComponent from "./Contacts/ContactComponent";
import NavBar from "./NavBar/NavBar";
import LoginForm from "./LoginForm/LoginForm";
import HomePage from "./HomePage/HomePage";
import RegisterForm from "./SignForm/Sign";
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
        <Route path="/contacts" element={<ContactComponent />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signIn" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
