/*eslint-disable*/
import { useEffect } from "react";
import { updateTime } from "../actions/timeActions";

const useEditTime = (time, viaLength) => {
  useEffect(() => {
    if (time && viaLength) {
      time.map((_) => {
        if (_.via.length < viaLength) {
          updateTime(
            {
              ..._,
              id: _._id,
              via: [
                ..._.via,
                ...Array.from({ length: viaLength - _.via.length }).fill(
                  "0:00"
                ),
              ],
            },
            false
          );
        } else if (_.via.length > viaLength) {
          let newVia = _.via;
          newVia.splice(0, _.via.length - viaLength);
          updateTime(
            {
              ..._,
              id: _._id,
              via: newVia,
            },
            false
          );
        }
      });
    }
  }, [viaLength]);
};

export default useEditTime;
