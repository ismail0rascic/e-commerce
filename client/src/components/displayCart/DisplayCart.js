import { connect } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getChart } from "../../actions/chartActions";

const DisplayCart = ({ auth, cart, books }) => {
  const navigate = useNavigate();
  useEffect(() => {
    getChart();
  }, []);
  const myCart =
    cart.length > 0 && auth.isAuthenticated
      ? cart.find((c) => c.userId === auth.user._id)
      : cart.find((c) => c.userId === "guest");
  const total =
    myCart &&
    books
      .filter((b) => myCart.items.includes(b._id))
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );

  return (
    <Grid item xs={12} md={3} lg={3}>
      {myCart && (
        <Card>
          <CardContent>
            <Typography>Items: {myCart.items.length}</Typography>
            <Typography>Total Price: ${total.toFixed(2)}</Typography>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              disabled={myCart.items.length === 0}
              onClick={() => {
                auth.isAuthenticated ? navigate("/cart") : navigate("/signin");
              }}
            >
              View Cart
            </Button>
          </CardActions>
        </Card>
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  books: state.bookR,
  cart: state.cartR,
});
export default connect(mapStateToProps)(DisplayCart);
