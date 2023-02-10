import { useState } from "react";
import useStyles from "../../styles/style";
import { cartFieldsData } from "./cart.field.data";

const useCart = (auth, cart, books, promotions) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    promotion: "",
    errors: {},
  });

  const myCart = cart && cart.find((c) => c.userId === auth.user._id);

  const [discounted, setDiscounted] = useState(false);
  let total =
    myCart &&
    books
      .filter((b) => myCart.items.includes(b._id))
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
  const clickAddPromotion = () => {
    const exist = promotions.find((p) => p.code === values.promotion);
    if (!exist) {
      setValues({
        ...values,
        errors: { promotion: "Promo code in not valid" },
      });
    } else {
      total = total - (total * exist.discount) / 100;
      setDiscounted(total - (total * exist.discount) / 100);
    }

  };

  const field = cartFieldsData(values, setValues);
  return {
    values,
    setValues,
    field,
    myCart,
    total,
    clickAddPromotion,
    discounted,
  };
};
export default useCart;
