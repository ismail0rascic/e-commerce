import { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { addBook, updateBook } from "../../actions/bookActions";
import { bookEditButtons } from "./bookEdit.buttons.data";
import { bookEditCompletes } from "./bookEdit.completes.data";
import { bookEditFields } from "./bookEdit.fields.data";

const useBookEdit = (books, classes) => {
  const id = useParams().id;
  const navigate = useNavigate();

  const [values, setValues] = useState({
    title: id ? false : "",
    author: id ? false : "",
    price: id ? false : "",
    image: id ? false : "",
    record: id ? false : "",
    stop: id ? false : "",
    stock: id ? false : "",
    errors: {},
  });
  const book = id && books.find((o) => o._id === id);

  const clickSave = (e) => {
    const newBook = {
      id: id && id,
      title: values.title === false ? book.title : values.title,
      author: values.author === false ? book.author : values.author,
      price: values.price === false ? book.price * 1 : values.price * 1,
      image: values.image === false && book ? book.image : values.image,
      record:
        values.record === false && book ? book.record * 1 : values.record * 1,
      stop: values.stop === false && book ? book.stop : values.stop,
      stock: values.stock === false && book ? book.stock * 1 : values.stock * 1,
    };
    if (book) {
      updateBook(newBook, navigate);
    } else {
      addBook(newBook, navigate);
    }
  };

  const fields = values && bookEditFields(values, setValues, book, classes);
  const completes = bookEditCompletes(setValues, values, classes, book);
  const buttons = bookEditButtons(clickSave, classes);
  const image = values.image === false && book ? book.image : values.image;

  return {
    values,
    setValues,
    fields,
    buttons,
    image,
    completes,
  };
};
export default useBookEdit;
