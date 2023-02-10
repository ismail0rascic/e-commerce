import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
const CustomerRoute = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.auth.isAuthenticated) return navigate("/");
  });

  return props.users.find((o) => o._id === props.auth.user._id) &&
    props.users.find((o) => o._id === props.auth.user._id).role === "customer"
    ? props.children
    : props.users.find((o) => o._id === props.auth.user._id) && (
        <Navigate to={{ pathname: "/" }} />
      );
};
const mapStateToProps = (state) => ({
  auth: state.authR,
  users: state.userR,
});
export default connect(mapStateToProps)(CustomerRoute);
