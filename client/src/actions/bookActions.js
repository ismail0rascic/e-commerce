import { GET_BOOKS, REFRESH_BOOKS } from "./types";
import {
  getAll,
  getFilter,
  addOne,
  updateOne,
  deleteOne,
  refresh,
} from "./basicActions";

export const getBooks = () => {
  getAll("api/books", GET_BOOKS);
};
export const filterBooks = (filter) => {
  getFilter("api/books/", GET_BOOKS, filter);
};

export const addBook = async (userData, func) => {
  const f = () => {
    getBooks();
    func("/");
  };

  addOne("api/books", userData, f).then(() => {});
};
export const updateBook = async (userData, func) => {
  const f = () => {
    getBooks();
    func("/");
  };
  await updateOne("api/books/", userData, f);
};
export const deleteBook = async (id) => {
  deleteOne("api/books/", id, getBooks);
};
export const refreshBooks = async (data) => {
  refresh(data, REFRESH_BOOKS);
};
