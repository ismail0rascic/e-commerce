import { GET_CHART } from "../actions/types";
const initialState = [];
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHART:
      return action.payload;
    default:
      return state;
  }
}
