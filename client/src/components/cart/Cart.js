import { connect } from "react-redux";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Field from "../basic/Field";
import useCart from "./useCart";
import { removeFromCart } from "../../actions/chartActions";

const Cart = ({ auth, cart, books, promotions, users }) => {
  const navigate = useNavigate();

  const {
    values,
    setValues,
    field,
    myCart,
    total,
    clickAddPromotion,
    discounted,
  } = useCart(auth, cart, books, promotions);

  const user = users.find((user) => user._id === auth.user._id);

  return (
    <Container>
      <Grid container>
        {myCart && (
          <>
            <Grid
              item
              xs={12}
              md={9}
              lg={9}
              style={{
                marginBottom: 10,
              }}
            >
              {books
                .filter((b) => myCart.items.includes(b._id))
                .map((book, i) => {
                  return (
                    <Box
                      key={i}
                      style={{
                        marginBottom: 20,
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          removeFromCart({
                            id: auth.user._id,
                            items: book,
                          });
                        }}
                      >
                        Remove
                      </Button>
                      &nbsp;&nbsp;
                      <Typography variant="h6">{book.title}</Typography>{" "}
                      &nbsp;&nbsp;
                      <Typography variant="h6" color="primary">
                        ${book.price}
                      </Typography>
                    </Box>
                  );
                })}
            </Grid>
            {user && user.member && (
              <Grid
                item
                xs={12}
                md={9}
                lg={9}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  marginBottom: 50,
                }}
              >
                <Typography color="primary" variant="h6">
                  Add Coupon:
                </Typography>{" "}
                &nbsp;&nbsp;
                <Field
                  data={field}
                  values={values}
                  id={values.id}
                  setValues={setValues}
                />
                &nbsp;&nbsp;
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    clickAddPromotion();
                  }}
                >
                  Add
                </Button>
              </Grid>
            )}
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              style={{
                textAlign: "end",
                marginBottom: 50,
              }}
            >
              <Typography
                variant="h6"
                style={{
                  textDecoration: discounted && "line-through",
                  color: discounted && "red",
                }}
              >
                Total: ${total.toFixed(2)}
              </Typography>
              {discounted && (
                <Typography
                  color="primary"
                  variant="h6"
                  style={{
                    color: "green",
                  }}
                >
                  New price: ${discounted.toFixed(2)}
                </Typography>
              )}

              <Button
                color="primary"
                variant="contained"
                disabled={myCart.items.length === 0}
                onClick={() => {
                  navigate("/billing");
                }}
              >
                Checkout
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  books: state.bookR,
  cart: state.cartR,
  promotions: state.promotionR,
  users: state.userR,
});
export default connect(mapStateToProps)(Cart);
