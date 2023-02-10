export const profileButtons = (func1, func2, func3, classes) => {
  const buttons = [
    { id: "#id1", title: "CLOSE", func: () => func1(), class: classes.button },
    { id: "#id2", title: "SAVE", func: () => func2(), class: classes.button },
    {
      id: "#id3",
      title: "SET PASSWORD",
      func: () => func3(),
      class: classes.textField,
    },
  ];

  return buttons;
};
