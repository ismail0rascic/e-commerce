export const bookEditCompletes = (
  setValues,
  values,
  classes,
  book
) => {
  const completes = {
    title: "Stop Order",
    data: ["on", "off"],
    value: values.stop !== false ? values.stop : book ? book.stop : "",
    class: classes.textField,
    error: values.errors.stop,
    changeState: (_) => {
      setValues({ ...values, stop: _ });
    },
  };

  return completes;
};
