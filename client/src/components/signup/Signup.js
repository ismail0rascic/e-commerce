import { connect } from "react-redux";

import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import Field from "../basic/Field";
import BoxChecker from "../basic/BoxChecker";
import useStyles from "../../styles/style";

import useSignup from "./useSignup";
import useError from "../../customHooks/useError";
import { Link } from "react-router-dom";
import CustomizedButton from "../basic/CustomizedButton";
const Signup = (props) => {
  const classes = useStyles();
  const { fields, buttons, check, values, setValues, location } = useSignup(
    classes,
    props.auth
  );
  useError(setValues, values, props.errors);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" color="primary">
          {location === "/signup" ? "Sign Up" : "Add User"}
        </Typography>
        {fields.map((_, i) => {
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
        <BoxChecker data={check} />
        {values.errors.signup && (
          <Typography component="p" color="error">
            {values.errors.signup}
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

      {location === "/signup" && (
        <Typography component="p">
          Already have an account &nbsp;
          <Link to="/signin">LogIn</Link>
        </Typography>
      )}
    </Card>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  errors: state.errorR,
});
export default connect(mapStateToProps)(Signup);
