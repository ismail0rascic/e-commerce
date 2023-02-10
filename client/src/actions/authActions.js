import axios from "axios";
import store from "../store";

import { getError, clearError } from "./errorActions";
import { setCurrentUser } from "./userActions";
import { baseUrl } from "../config";
import { REFRESHED } from "./types";
import { deleteCart } from "./chartActions";

export const signUp = (userData, navigate) => {
  axios
    .post(baseUrl + "auth/signup", userData)
    .then((res) => {
      navigate("/");
    })
    .catch((err) => getError(err));
};

export const signIn = (userData) => {
  axios
    .post("auth/signin", userData)
    .then((res) => {
      store.dispatch(setCurrentUser(res.data.token));
      clearError();
    })
    .catch((err) => {
      getError(err);
    });
};

export const signOut = (navigate, id) => {
  axios.post("auth/signout");
  store.dispatch(setCurrentUser({}));
  deleteCart(id);
  navigate("/");
};

export const refreshAuth = () => {
  axios.get("/auth/refresh").then((res) => {
    if (res.data.message)
      store.dispatch({
        type: REFRESHED,
      });
    else {
      store.dispatch(setCurrentUser(res.data.token));
    }

    clearError();
  });
};
