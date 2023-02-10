import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
import CustomerRoute from "./CustomerRoute";
import ManagerRoute from "./ManagerRoute";

import Home from "../home/Home";
import Books from "../books/Books";
import Team from "../team/Team";

import BookEdit from "../bookEdit/BookEdit";
import { getBooks } from "../../actions/bookActions";
import { getPromotion } from "../../actions/promotionActions";
import { useEffect } from "react";
import { getUsers } from "../../actions/userActions";
import PromotionAdd from "../promotionAdd/PromotionAdd";
import { createCart, getChart } from "../../actions/chartActions";
import Cart from "../cart/Cart";
import Billing from "../billing/Billing";
import Finish from "../finish/Finish";
import { getOrder } from "../../actions/orderActions";
import Orders from "../orders/Orders";

const MainRouter = ({ auth }) => {
  useEffect(() => {
    getBooks();
    getPromotion();
    getUsers();
    getChart();
    getOrder();
  }, []);

  useEffect(() => {
    if (auth.loading) {
      if (auth.isAuthenticated) {
        createCart(auth.user._id);
      } else {
        createCart("guest");
      }
    } // eslint-disable-next-line
  }, [auth.user._id, auth.loading]);

  return (
    <div style={{ marginTop: 100 }}>
      {auth.loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/books" element={<Books />} />
          <Route
            path="/book/edit/:id"
            element={
              <ManagerRoute>
                <BookEdit />
              </ManagerRoute>
            }
          />
          <Route
            path="/book/add"
            element={
              <ManagerRoute>
                <BookEdit />
              </ManagerRoute>
            }
          />
          <Route
            path="/promotion/add"
            element={
              <ManagerRoute>
                <PromotionAdd />
              </ManagerRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <CustomerRoute>
                <Cart />
              </CustomerRoute>
            }
          />
          <Route
            path="/billing"
            element={
              <CustomerRoute>
                <Billing />
              </CustomerRoute>
            }
          />
          <Route
            path="/finish"
            element={
              <CustomerRoute>
                <Finish />
              </CustomerRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ManagerRoute>
                <Orders />
              </ManagerRoute>
            }
          />
        </Routes>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.authR,
  users: state.userR,
});
export default connect(mapStateToProps)(MainRouter);
