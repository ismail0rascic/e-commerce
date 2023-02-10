export const bookCheck = (values,setValues) => {
  const check = {
    label: "",
    class: "",
    values: values,
    disabled: false,
    changeState: (_) => {
      const v = values.filter((filter) => filter !== _);

      values.includes(_) ? setValues(v) : setValues([...values, _]);
    },
  };

  return check;
};
