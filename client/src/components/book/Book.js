/*eslint-disable*/
import { Avatar, Box, Button, Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import BoxChecker from "../basic/BoxChecker";

import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import useBook from "./useBook";
const Book = ({ book, values, setValues, auth, users }) => {
  const navigate = useNavigate();
  const { check } = useBook(values, setValues);
  const user = users.find((user) => user._id === auth.user._id);
  return (
    <Grid container>
      {(!user || (user && user.role === "customer")) && (
        <Grid
          item
          xs={2}
          md={2}
          lg={2}
          style={{ textAlign: "start", padding: 5 }}
        >
          <BoxChecker
            data={check}
            value={book}
            disabled={book.stop === "on" || book.stock === 0}
          />
        </Grid>
      )}
      <Grid
        item
        xs={2}
        md={2}
        lg={2}
        style={{ textAlign: "start", padding: 5 }}
      >
        <Avatar
          style={{ width: 100, height: 100, margin: 5 }}
          src={book.image && require("../../images/books/" + book.image)}
        />
      </Grid>
      <Grid
        item
        xs={7}
        md={7}
        lg={7}
        style={{ textAlign: "start", padding: 5 }}
      >
        <Typography style={{ marginBottom: 0 }} variant="h6" color="primary">
          Title: {book.title}
        </Typography>
        <Box style={{ display: "flex" }}>
          <Box>
            <Typography style={{ marginBottom: 5 }}>
              Author: {book.author}
            </Typography>
            <Typography style={{ marginBottom: 5 }}>
              Price: ${book.price}
            </Typography>
          </Box>
          &nbsp;&nbsp;&nbsp;
          {user && user.role === "manager" && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                navigate(`/book/edit/${book._id}`);
              }}
            >
              Edit
            </Button>
          )}
          &nbsp;&nbsp;
          {user && user.role === "manager" && book.stock <= book.record && (
            <Typography style={{ marginBottom: 5, color: " red" }}>
              Book need to be reloaded!
            </Typography>
          )}
          {(!user || user && user.role === "customer") && book.stop === "on" && (
            <Typography style={{ marginBottom: 5, color: " red" }}>
            Ordering this book is stopped!
            </Typography>
          )}
          {(!user || user && user.role === "customer") && book.stock === 0 && (
            <Typography style={{ marginBottom: 5, color: " red" }}>
            Stock is empty!
            </Typography>
          )}
          
        </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  users: state.userR,
});
export default connect(mapStateToProps)(Book);
