import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import propTypes from "prop-types";

const RestrictedRoute = ({ element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to="/" /> : element;
};

RestrictedRoute.propTypes = {
  element: propTypes.element.isRequired,
};

export default RestrictedRoute;
