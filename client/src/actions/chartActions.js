import axios from "axios";
import { getError } from "./errorActions";
import { GET_CHART } from "./types";
import { deleteOne, getAll, updateOne } from "./basicActions";
import { baseUrl } from "../config";

export const getChart = () => {
  getAll("api/cart", GET_CHART);
};

export const createCart = async (id) => {
  await updateOne("api/cart/", { id: id }, getChart);
};

export const deleteCart = async (id) => {
  deleteOne("api/cart/", id);
};


export const addToCart = async (userData) => {
  axios
    .put(baseUrl + "api/cartAdd/" + userData.id, userData)
    .then((res) => {
      getChart();
    })
    .catch((err) => {
      getError(err);
    });
};
export const removeFromCart = async (userData) => {
  axios
    .put(baseUrl + "api/cartRemove/" + userData.id, userData)
    .then((res) => {
      getChart();
    })
    .catch((err) => {
      getError(err);
    });
};
