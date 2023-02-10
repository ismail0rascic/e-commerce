export const promotionAddButtons = (func1, classes) => {
  const buttons = { title: "SAVE", func: () => func1(), class: classes.button };

  return buttons;
};
