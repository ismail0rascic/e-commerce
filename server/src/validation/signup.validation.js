import validator from "validator";
import isEmpty from "is-empty";

export default function validateSignUp(data) {
  let errors = {};
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.username) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.state = !isEmpty(data.state) ? data.state : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.zip = !isEmpty(data.zip) ? data.zip : "";

  if (validator.isEmpty(data.username)) {
    errors.username = "Gender field is required";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (validator.isEmpty(data.state)) {
    errors.state = "State field is required";
  }
  if (validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }
  if (validator.isEmpty(data.zip)) {
    errors.password2 = "Zip password field is required";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}
