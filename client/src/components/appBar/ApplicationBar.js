import React from "react";
import { connect } from "react-redux/es";
import { useEffect } from "react";

import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import SearchBar from "../basic/SearchBar";
import ItemsMenu from "../basic/ItemsMenu";

import { getUsers } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../actions/authActions";
import { getItems } from "./helpers";

const ApplicationBar = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.auth.isAuthenticated && getUsers(props.auth.user._id);
    // eslint-disable-next-line
  }, [props.auth.user._id]);

  

  const user =
    props.users && props.users.find((user) => user._id === props.auth.user._id);
  const items = getItems(navigate);
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => navigate("/")}
            style={{ margin: "0" }}
          >
            <HomeIcon />
          </IconButton>
          {user && user.role === "manager" && <ItemsMenu data={items} />}
          <SearchBar />
          <Button
            variant={!props.auth.isAuthenticated ? "outlined" : "text"}
            disabled={props.auth.isAuthenticated}
            color="inherit"
            style={{
              position: "absolute",
              right: 140,
              margin: "0",
            }}
            onClick={() => {
              !props.auth.isAuthenticated && navigate("/signup");
            }}
          >
            <Typography variant={props.auth.isAuthenticated ? "h5" : "body1"}>
              {!props.auth.isAuthenticated
                ? "Register"
                : `Welcome ${user && user.username}!`}
            </Typography>
          </Button>

          <Button
            variant="outlined"
            color="inherit"
            style={{
              position: "absolute",
              right: 30,
              margin: "0",
            }}
            onClick={() => {
              !props.auth.isAuthenticated
                ? navigate("/signin")
                : signOut(navigate, props.auth.user._id);
            }}
          >
            {!props.auth.isAuthenticated ? "Sing In" : "Sign Out"}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  users: state.userR,
});

export default connect(mapStateToProps)(ApplicationBar);
