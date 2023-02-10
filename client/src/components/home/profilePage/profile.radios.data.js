export const profileRadios = (setValues, values, user) => {
  const radios = [
    {
      title: "Gender",
      elements: ["male", "female"],
      value: values.gender !== false ? values.gender : user.gender,
      error: values.errors.gender,
      changeState: (_) => setValues({ ...values, gender: _ }),
    },
    {
      title: "Role",
      elements: ["admin", "user"],
      value: values.role !== false ? values.role : user.role,
      error: values.errors.role,
      changeState: (_) => setValues({ ...values, role: _ }),
    },
  ];

  return radios;
};
