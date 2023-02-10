import axios from "axios";
import store from "../store";

import { getError } from "./errorActions";
import { baseUrl } from "../config";

export const getAll = (url, type) => {
  axios
    .get(baseUrl + url)
    .then((res) => {
      store.dispatch({
        type: type,
        payload: res.data,
      });
    })
    .catch((err) => {
      getError(err);
    });
};
export const getFilter = (name, url, type, filter) => {
  axios
    .get(baseUrl + url + filter)
    .then((res) => {
      store.dispatch({
        type: type,
        payload: res.data,
      });
    })
    .catch((err) => {
      getError(err);
    });
};

export const getById = (url, type, id) => {
  axios
    .get(baseUrl + url + id)
    .then((res) => {
      store.dispatch({
        type: type,
        payload: res.data,
      });
    })
    .catch((err) => {
      getError(err);
    });
};

export const addOne = async (url, userData, func) => {
  axios
    .post(baseUrl + url, userData)
    .then((res) => {
      func(res.data);
    })
    .catch((err) => {
      getError(err);
    });
};

export const updateOne = async (url, userData, func) => {
  axios
    .put(baseUrl + url + userData.id, userData)
    .then((res) => {
      func();
    })
    .catch((err) => {
      console.log(err);
      getError(err);
    });
};

export const deleteOne = async (url, id) => {
  axios
    .delete(baseUrl + url + id)
    .then((res) => {})
    .catch((err) => {
      getError(err);
    });
};

export const refresh = (data, type) => {
  store.dispatch({
    type: type,
    payload: data,
  });
};
