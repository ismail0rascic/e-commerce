export const signinFieldsData = (values, classes) => {
  const fields = [
    {
      id: "email",
      type: "text",
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
  ];
  return fields;
};
