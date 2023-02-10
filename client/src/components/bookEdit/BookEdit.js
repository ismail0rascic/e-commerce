import { connect } from "react-redux";

import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";

import Field from "../basic/Field";
import CustomizedButton from "../basic/CustomizedButton";
import UploadImage from "../basic/UploadImage";
import Complete from "../basic/Complete";

import useStyles from "../../styles/style";
import useBookEdit from "./useBookEdit";
import useError from "../../customHooks/useError";

const BookEdit = (props) => {
  const classes = useStyles();
  const { values, setValues, fields, buttons, image, completes } = useBookEdit(
    props.books,
    classes
  );
  useError(setValues, values, props.errors);
  return (
    <>
      {values && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h3" className={classes.title}>
              Book
            </Typography>
            <Grid container>
              <Grid item xs={6} md={6} lg={6}>
                {fields
                  .filter((filter) => filter)
                  .map((_, i) => {
                    return (
                      <Field
                        key={_ + i}
                        data={_}
                        values={values}
                        id={values.id}
                        setValues={setValues}
                      />
                    );
                  })}
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                <UploadImage
                  image={image}
                  values={values}
                  setValues={setValues}
                />
                <Complete data={completes} />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <CustomizedButton data={buttons} />;
          </CardActions>
        </Card>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errorR,
  books: state.bookR,
  authors: state.authorR,
  authBooks: state.authBooksR,
  publishers: state.publisherR,
});
export default connect(mapStateToProps)(BookEdit);
