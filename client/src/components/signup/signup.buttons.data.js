export const signupButtons = (func2) => {
  const buttons = [
    {
      title: "SIGNUP",
      func: () => func2(),
      color: "secondary",
    },
  ];

  return buttons;
};
