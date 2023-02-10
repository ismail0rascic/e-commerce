import { GET_ERRORS } from "./types";
import store from "../store";

export const clearError = () => {
  store.dispatch({
    type: GET_ERRORS,
    payload: {},
  });
};

export const getError = (err) => {
  console.log(err);
  store.dispatch({
    type: GET_ERRORS,
    payload: err.response.data,
  });
};
