import { REFRESHED, SET_CURRENT_USER } from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: true,
      };
    case REFRESHED:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
