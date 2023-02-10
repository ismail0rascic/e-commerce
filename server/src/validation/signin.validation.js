import validator from "validator";
import isEmpty from "is-empty";
export default function validateSignIn(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.email)) {
    errors.password = "All field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "All field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}
