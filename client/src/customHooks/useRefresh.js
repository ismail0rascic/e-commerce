import { useEffect } from "react";

const useRefresh = (name, type, func) => {
  useEffect(() => {
    const storage = localStorage.getItem(name);
    if (type.length === 0 && storage) {
      func(JSON.parse(storage));
    } //eslint-disable-next-line
  }, []);
};

export default useRefresh;
