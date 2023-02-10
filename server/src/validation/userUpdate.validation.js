import validator from "validator";
import isEmpty from "is-empty";

export default function validateUserUpdate(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.DOB = !isEmpty(data.DOB) ? data.DOB : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }
  if (validator.isEmpty(data.DOB)) {
    errors.DOB = "DOB field is required";
  }
  if (validator.isEmpty(data.phone)) {
    errors.phone = "Phone field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
