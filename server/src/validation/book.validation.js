import validator from "validator";
import isEmpty from "is-empty";

export default function validateBook(data) {
  let errors = {};
  data.title = !isEmpty(data.title) ? data.title : "";
  data.author = !isEmpty(data.author) ? data.author : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.image = !isEmpty(data.image) ? data.image : "";
  data.record = !isEmpty(data.record) ? data.record : "";
  data.stock = !isEmpty(data.stock) ? data.stock : "";
  data.stop = !isEmpty(data.stock) ? data.stop : "";

  if (validator.isEmpty(data.image)) {
    errors.image = "Please add image";
  }
  if (validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }
  if (validator.isEmpty(data.author)) {
    errors.author = "Author field is required";
  }
  if (validator.isEmpty(data.stop)) {
    errors.stop = "Stop Order field is required";
  }
  if (!Number.isFinite(data.price)) {
    errors.price = "Price field is required";
  }

  if (!Number.isFinite(data.record)) {
    errors.record = "Record field is required";
  }
  if (!Number.isFinite(data.stock)) {
    errors.stock = "Stock field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
