import { GET_PROMOTION } from "./types";
import {
  getAll,
  addOne,
  deleteOne,
} from "./basicActions";

export const getPromotion = () => {
  getAll("api/promotion", GET_PROMOTION);
};

export const addPromotion = async (userData, func) => {
  const f = () => {
    func("/");
    getPromotion();
  };
  addOne("api/promotion", userData, f);
};


export const deletePromotion = async (id) => {
  deleteOne("api/promotion/", id, getPromotion);
};
