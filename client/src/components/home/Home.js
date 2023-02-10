import { connect } from "react-redux";

import { Grid } from "@material-ui/core";
import Books from "../books/Books";
import DisplayCart from "../displayCart/DisplayCart";

const Home = (props) => {
  const user =
    props.users && props.users.find((user) => user._id === props.auth.user._id);
  return (
    <Grid container spacing={2}>
      <Books user={user}/>
      {!user ? (
        <DisplayCart  />
      ) : (
        user.role === "customer" && <DisplayCart  />
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  users: state.userR,
});
export default connect(mapStateToProps)(Home);
