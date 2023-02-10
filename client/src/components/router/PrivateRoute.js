import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = (props) => {
  return props.auth.isAuthenticated === true ? (
    props.children
  ) : (
    <Navigate to={{ pathname: "/" }} />
  );
};
const mapStateToProps = (state) => ({
  auth: state.authR,
});
export default connect(mapStateToProps)(PrivateRoute);
