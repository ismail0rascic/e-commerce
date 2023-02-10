export const signupFieldsData = (values, classes) => {
  const fields = [
    {
      id: "username",
      type: "text",
      label: "Username",
      value: values.username,
      class: classes.textField,
      error: values.errors.username,
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      value: values.email,
      class: classes.textField,
      error: values.errors.email,
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      value: values.password,
      class: classes.textField,
      error: values.errors.password,
    },
    {
      id: "password2",
      type: "password",
      label: "Confirm Password",
      class: classes.textField,
      value: values.password2,
      error: values.errors.password2,
    },
    {
      id: "address",
      type: "text",
      label: "Address",
      value: values.address,
      class: classes.textField,
      error: values.errors.address,
    },
    {
      id: "state",
      type: "text",
      label: "State",
      value: values.state,
      class: classes.textField,
      error: values.errors.state,
    },
    {
      id: "city",
      type: "text",
      label: "City",
      value: values.city,
      class: classes.textField,
      error: values.errors.city,
    },
    {
      id: "zip",
      type: "text",
      label: "Zip Code",
      value: values.zip,
      class: classes.textField,
      error: values.errors.zip,
    },
  ];
  return fields;
};
