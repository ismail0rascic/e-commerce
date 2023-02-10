import { connect } from "react-redux";

import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import Field from "../basic/Field";
import useSignin from "./useSignin";
import useError from "../../customHooks/useError";
import useStyles from "../../styles/style";
import { Link } from "react-router-dom";
import CustomizedButton from "../basic/CustomizedButton";

const Signin = (props) => {
  const classes = useStyles();
  const { fields, buttons, values, setValues } = useSignin(classes, props.auth);
  useError(setValues, values, props.errors);
  return (
    <Card className={classes.card1}>
      <CardContent>
        <Typography variant="h4" color="primary">
          LogIn
        </Typography>
        {fields.map((_, i) => {
          return (
            <Field
              key={i}
              data={_}
              values={values}
              id={values.id}
              setValues={setValues}
            />
          );
        })}
        {values.errors.signin && (
          <Typography component="p" color="error">
            {values.errors.signin}
          </Typography>
        )}
      </CardContent>
      <CardActions
        style={{
          width: "auto",
          display: "flex",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {buttons.map((_, i) => {
          return <CustomizedButton key={i} data={_} />;
        })}
      </CardActions>
      <Typography component="p">
        No account? &nbsp;
        <Link to="/signup">SignUp</Link>
      </Typography>
    </Card>
  );
};
const mapStateToProps = (state) => ({
  auth: state.authR,
  errors: state.errorR,
});
export default connect(mapStateToProps)(Signin);
