import { bookCheck } from "./book.check";

const useBook = (values, setValues) => {
  const check = bookCheck(values, setValues);
  return { check };
};
export default useBook;
