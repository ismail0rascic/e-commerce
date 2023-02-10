import { GET_USERS, REFRESH_USERS } from "../actions/types";
const initialState = [];
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case REFRESH_USERS:
      return action.payload;
    default:
      return state;
  }
}
