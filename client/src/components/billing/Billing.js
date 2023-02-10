import { connect } from "react-redux";
import { Button, Grid, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Field from "../basic/Field";
import useBilling from "./useBilling";

const Billing = ({ auth, cart, books, promotions }) => {
  const navigate = useNavigate();
  const { values, setValues, field, clickOrder } = useBilling(
    auth,
    cart,
    books,
    promotions
  );

  return (
    <Grid container>
      <>
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
            Credit Card Number:
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
              clickOrder();
            }}
          >
            Submit Order
          </Button>
        </Grid>
      </>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  books: state.bookR,
  cart: state.cartR,
  promotions: state.promotionR,
});
export default connect(mapStateToProps)(Billing);
