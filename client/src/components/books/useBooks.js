import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { addToCart } from "../../actions/chartActions";

const useBooks = (auth) => {
  // const navigate = useNavigate();
  const [values, setValues] = useState([]);

  const clickAdd = () => {
    values.map(async (element) => {
      await addToCart({
        id: auth.isAuthenticated ? auth.user._id : "guest",
        items: element,
      });
    });
  };

  return { values, setValues, clickAdd };
};

export default useBooks;
