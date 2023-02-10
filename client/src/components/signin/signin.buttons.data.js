export const singinButtons = (func2) => {
  const buttons = [
    {
      title: "LOGIN",
      func: () => func2(),
      color: "secondary",
    },
  ];

  return buttons;
};
