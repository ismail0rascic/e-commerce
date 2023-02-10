export const sigupCheck = (values, setValues, classes) => {
  const check = {
    label: "I would like to be a member to receive additional discount",
    class: classes.textField,
    error: values.errors.member,
    value: values.member,
    changeState: (_) => {
      values.member
        ? setValues({ ...values, member: false })
        : setValues({ ...values, member: true });
    },
  };

  return check;
};
