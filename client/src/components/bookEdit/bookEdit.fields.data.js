export const bookEditFields = (values, setValues, book, classes, location) => {
  const fields = [
    {
      id: "title",
      type: "text",
      label: "Title",
      value: values.title !== false ? values.title : book ? book.title : "",
      class: classes.textField,
      error: values.errors.title,
    },
    {
      id: "author",
      type: "text",
      label: "Author",
      value: values.author !== false ? values.author : book ? book.author : "",
      class: classes.textField,
      error: values.errors.title,
    },
    {
      id: "price",
      type: "text",
      label: "Price",
      value: values.price !== false ? values.price : book ? book.price : "",
      class: classes.textField,
      error: values.errors.price,
      changeState: (name) => (event) => {
        !isNaN(event.target.value) &&
          setValues({ ...values, [name]: event.target.value });
      },
    },
    {
      id: "stock",
      type: "text",
      label: "Stock",
      value: values.stock !== false ? values.stock : book ? book.stock : "",
      class: classes.textField,
      error: values.errors.stock,
      changeState: (name) => (event) => {
        !isNaN(event.target.value) &&
          setValues({ ...values, [name]: event.target.value });
      },
    },
    {
      id: "record",
      type: "text",
      label: "Record",
      value: values.record !== false ? values.record : book ? book.record : "",
      class: classes.textField,
      error: values.errors.record,
      changeState: (name) => (event) => {
        !isNaN(event.target.value) &&
          setValues({ ...values, [name]: event.target.value });
      },
    },
  ];
  return fields;
};
