import { useEffect } from "react";
import { clearError } from "../actions/errorActions";

const useError = (setValues, values, errors) => {
  useEffect(() => {
    clearError();
  }, []);

  useEffect(() => {
    if (errors) {
      setValues({
        ...values,
        errors: errors,
      });
    }
    // eslint-disable-next-line
  }, [errors]);
};
export default useError;
