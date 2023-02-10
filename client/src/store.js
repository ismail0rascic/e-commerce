import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";
import promotionReducer from "./reducers/promotionReducer";
import bookReducer from "./reducers/bookReducer";
import userReducer from "./reducers/userReducer";
import searchReducer from "./reducers/searchReducer";
import cartReducer from "./reducers/cartReducer";
import orderReducer from "./reducers/orderReducer";

const rootReducer = combineReducers({
  authR: authReducer,
  errorR: errorReducer,
  userR: userReducer,
  promotionR: promotionReducer,
  bookR: bookReducer,
  searchR: searchReducer,
  cartR: cartReducer,
  orderR: orderReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
