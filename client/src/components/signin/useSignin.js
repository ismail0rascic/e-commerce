import { useState } from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { signIn } from "../../actions/authActions";
import { signinFieldsData } from "./singin.fields.data";
import { singinButtons } from "./signin.buttons.data";

const useSignin = (classes, auth) => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    errors: {},
  });
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/");
    }
  });

  const clickSignIn = () => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    signIn(userData);
  };

  const fields = signinFieldsData(values, classes);
  const buttons = singinButtons(clickSignIn, classes);
  return { fields, buttons, values, setValues };
};
export default useSignin;
