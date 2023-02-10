export const profileDate = (setValues, user, values) => {
  const radios = {
    title: "DOB",
    value: values.DOB === "" ? values.DOB : user.DOB,
    changeState: (_) => {
      setValues({ ...values, DOB: `${_.$M + 1}/${_.$D}/${_.$y}` });
    },
  };

  return radios;
};
