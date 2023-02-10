import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@material-ui/core";

const SlideBar = ({ data }) => {
  return (
    <Box className={data.class}>
      <Typography>{data.title}</Typography>
      <Slider
        valueLabelDisplay="auto"
        defaultValue={1}
        value={data.value ? data.value : 0}
        step={1}
        marks
        min={1}
        max={44}
        onChange={(e) => {
          data.changeState(e.target.value);
        }}
      />
    </Box>
  );
};
export default SlideBar;
