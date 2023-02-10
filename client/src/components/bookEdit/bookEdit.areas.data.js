export const bookEditAreas = (values, classes, book) => {
  const areas = {
    id: "description",
    type: "text",
    label: "Description",
    value:
      values.description !== false
        ? values.description
        : book
        ? book.description
        : "",
    class: classes.textField,
    error: values.errors.description,
  };

  return areas;
};
