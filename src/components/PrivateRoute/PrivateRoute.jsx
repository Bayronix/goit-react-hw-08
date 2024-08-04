import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import propTypes from "prop-types";

const PrivateRoute = ({ element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? element : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  element: propTypes.element.isRequired,
};
export default PrivateRoute;
