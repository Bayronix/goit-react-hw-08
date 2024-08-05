import Navigation from "../Navigation/Navigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      <br />
    </>
  );
};

export default AppBar;
//test
