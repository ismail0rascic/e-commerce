export const billingFieldsData = (values, setValues) => {
  const fields = {
    id: "card",
    type: "text",
    label: "",
    value: values.card,
    error: values.errors.card,
    changeState: (name) => (event) => {
      setValues({ ...values, [name]: event.target.value, errors: {} });
    },
  };

  return fields;
};
