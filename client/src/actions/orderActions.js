import { addOne, getAll } from "./basicActions";
import { getBooks } from "./bookActions";
import { getChart } from "./chartActions";
import { GET_ORDER } from "./types";

export const getOrder = () => {
  getAll("api/order", GET_ORDER);
};

export const addOrder = async (userData, func) => {
  const f = (data) => {
    getOrder();
    func("/finish");
    getChart();
    getBooks();
  };

  addOne("api/order", userData, f);
};
