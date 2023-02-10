import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPromotion } from "../../actions/promotionActions";
import { promotionAddFields } from "./promotionAdd.fields.data";
import { promotionAddButtons } from "./promotionAdd.buttons.data";
import voucher_codes from "voucher-code-generator";

const usePromotionAdd = (classes) => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    discount: "",
    expiration: "",
    code: voucher_codes.generate({
      length: 5,
      count: 1,
    })[0],
    errors: {},
  });

  const clickSave = (e) => {
    const newPromotion = {
      discount: values.discount * 1,
      expiration: values.expiration * 1,
      code: values.code,
    };
    addPromotion(newPromotion, navigate);
  };

  const fields = promotionAddFields(values, setValues, classes);
  const buttons = promotionAddButtons(clickSave, classes);

  return { values, setValues, fields, buttons };
};
export default usePromotionAdd;
