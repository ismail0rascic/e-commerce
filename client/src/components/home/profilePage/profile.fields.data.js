export const profileFieldsData = (values, user, classes) => {
  const fields = [
    {
      id: "name", //+ user._id,
      type: "text",
      label: "name",
      value: values.name !== false ? values.name : user.name,
      class: classes.textField,
      error: values.errors.name,
      changeState: false,
    },
    {
      id: "phone",// + user._id,
      type: "text",
      label: "phone",
      value: values.phone !== false ? values.phone : user.phone,
      class: classes.textField,
      error: values.errors.phone,
      changeState: false,
    },
    {
      id: "email",// + user._id,
      type: "email",
      label: "Email",
      value: values.email !== false ? values.email : user.email,
      class: classes.textField,
      error: values.errors.email,
      changeState: false,
    },
  ];
  return fields;
};
