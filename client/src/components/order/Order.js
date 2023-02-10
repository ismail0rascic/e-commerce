import { connect } from "react-redux";
import { Box, Card, Grid } from "@material-ui/core";
import { Typography } from "@mui/material";

const Order = ({ books, users, order }) => {
  const user = users && users.find((u) => u._id === order.user);
  const items = books.filter((b) => order.items.includes(b._id));
  const total =
    items &&
    items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );

  return (
    <Card style={{ marginBottom: 20, border: "3px solid orange" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={8}
          lg={8}
          style={{ textAlign: "start", padding: 5 }}
        >
          <Typography style={{ marginBottom: 0 }} variant="h6" color="primary">
            Customer: {user && user.username}
          </Typography>
          <Typography style={{ marginBottom: 0 }}>
            Date: {order.date}
          </Typography>
          <Typography style={{ marginBottom: 0 }}>
            Time: {order.time}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Box>
            <Typography
              style={{ marginBottom: 5 }}
              variant="h6"
              color="primary"
            >
              Items: {items.length}
            </Typography>
            <Typography
              style={{ marginBottom: 5 }}
              variant="h6"
              color="primary"
            >
              Price: ${total}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  books: state.bookR,
  users: state.userR,
});
export default connect(mapStateToProps)(Order);
