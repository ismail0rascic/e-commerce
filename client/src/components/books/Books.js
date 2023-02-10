/*eslint-disable*/
import { connect } from "react-redux";

import { Button, Grid } from "@material-ui/core";
import Book from "../book/Book";
import useBooks from "./useBooks";
import { Stack } from "@mui/system";

const Books = (props) => {
  const { values, setValues, clickAdd } = useBooks(props.auth);

  const searched =
    props.books.length > 0 &&
    props.books
      .map((book) => book.title.includes(props.search) && book)
      .filter((a) => a)
      .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <Grid item xs={12} md={9} lg={9} style={{ display: "flex" }}>
        <Stack width={"100%"}>
          {(!props.user || (props.user && props.user.role !== "manager")) && (
            <Button
              color="primary"
              variant="contained"
              onClick={() => clickAdd()}
              style={{ maxHeight: 50 }}
            >
              Add
            </Button>
          )}
          {searched.length > 0 &&
            searched.map((book, i) => {
              return (
                <Book
                  key={i}
                  book={book}
                  values={values}
                  setValues={setValues}
                />
              );
            })}
        </Stack>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  books: state.bookR,
  users: state.userR,
  search: state.searchR,
});
export default connect(mapStateToProps)(Books);
