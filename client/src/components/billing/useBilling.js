import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../../actions/orderActions";
import { billingFieldsData } from "./billing.cart.field";

const useBilling = (auth, cart, books, promotions) => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    card: "",
    errors: {},
  });

  const myCart = cart && cart.find((c) => c.userId === auth.user._id);

  const clickOrder = () => {
    if (values.card === "") {
      setValues({
        ...values,
        errors: { card: "Please input card number" },
      });
    } else {
      const newOrder = {
        user: auth.user._id,
        items: myCart.items,
        discount: myCart.discount,
      };
      addOrder(newOrder, navigate);
    }
  };

  const field = billingFieldsData(values, setValues);
  return {
    values,
    setValues,
    field,
    clickOrder,
  };
};
export default useBilling;
