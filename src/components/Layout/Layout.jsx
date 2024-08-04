import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import propTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};
Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
