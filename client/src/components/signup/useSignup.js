import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { signUp } from "../../actions/authActions";
import { signupFieldsData } from "./signup.fields.data";
import { signupButtons } from "./signup.buttons.data";
import { sigupCheck } from "./signup.check.data";

const useSignup = (classes, auth) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    address: "",
    state: "",
    city: "",
    zip: "",
    member: "",
    errors: {},
  });
  useEffect(() => {
    if (auth.isAuthenticated && location === "/signup") {
      navigate("/");
    }
  });

  const clickSave = (e) => {
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
      password2: values.password2,
      address: values.address,
      state: values.state,
      city: values.city,
      zip: values.zip,
      member: values.member ? values.member : false,
    };
    signUp(newUser, navigate, location !== "/signiup" ? "/users" : "/");
  };

  const fields = signupFieldsData(values, classes);
  const buttons = signupButtons(clickSave, classes);
  const check = sigupCheck(values, setValues, classes);

  return { fields, buttons, check, values, setValues, location };
};

export default useSignup;
