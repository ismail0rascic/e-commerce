import { GET_BOOKS, REFRESH_BOOKS } from "../actions/types";
const initialState = [];
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case REFRESH_BOOKS:
      return action.payload;
    default:
      return state;
  }
}
