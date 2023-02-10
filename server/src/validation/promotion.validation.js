import isEmpty from "is-empty";

export default function validatePublic(data) {
  let errors = {};

  console.log(data);
  data.expiration = !isEmpty(data.expiration) ? data.expiration : "";
  data.discount = !isEmpty(data.discount) ? data.discount : "";

  if (!Number.isFinite(data.expiration)) {
    errors.expiration = "Expiration field is required";
  }

  if (!Number.isFinite(data.discount)) {
    errors.discount = "Discount field is required";
  }

  
  return {
    errors,
    isValid: isEmpty(errors),
  };
}
