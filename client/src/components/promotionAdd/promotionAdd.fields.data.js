export const promotionAddFields = (values,setValues, classes) => {
  const fields = [
    {
      id: "discount",
      type: "text",
      label: "Discount",
      value: values.discount,
      class: classes.textField,
      error: values.errors.discount,
      changeState: (name) => (event) => {
        !isNaN(event.target.value) &&
          setValues({ ...values, [name]: event.target.value });
      },
    
    },

    {
      id: "expiration",
      type: "text",
      label: "Expiration",
      value: values.expiration,
      class: classes.textField,
      error: values.errors.expiration,
      changeState: (name) => (event) => {
        !isNaN(event.target.value) &&
          setValues({ ...values, [name]: event.target.value });
      },
    
    },
  ];
  return fields;
};
