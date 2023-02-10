import { SET_CURRENT_USER, GET_USERS, REFRESH_USERS } from "./types";
import { getAll, refresh } from "./basicActions";

export const getUsers = async () => {
  getAll("api/users", GET_USERS);
};

export const refreshUser = async (data) => {
  refresh(data, REFRESH_USERS);
};
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
