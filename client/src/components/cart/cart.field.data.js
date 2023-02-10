export const cartFieldsData = (values, setValues) => {
  const fields = {
    id: "promotion",
    type: "text",
    label: "",
    value: values.promotion,
    error: values.errors.promotion,
    changeState: (name) => (event) => {
      setValues({ ...values, [name]: event.target.value, errors: {} });
    },
  };

  return fields;
};
