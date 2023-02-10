import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Order from "../order/Order";

const Orders = (props) => {
  return (
    <Grid container>
      {props.orders.reverse().map((order, i) => {
        return (
          <Grid key={i} item xs={12} md={12} lg={12}>
            <Order order={order} />
          </Grid>
        );
      })}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  orders: state.orderR,
  users: state.userR,
});
export default connect(mapStateToProps)(Orders);
