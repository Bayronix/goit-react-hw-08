import { Route, Routes } from "react-router";
import ContactComponent from "./Contacts/ContactComponent";
import NavBar from "./NavBar/NavBar";
import LoginForm from "./LoginForm/LoginForm";
import HomePage from "./HomePage/HomePage";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactComponent />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
