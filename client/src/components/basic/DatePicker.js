import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import useStyles from "../../styles/style";
import { Typography } from "@material-ui/core";

const DatePicker = ({ data, disabled }) => {
  const classes = useStyles();

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} className={classes.date}>
          <DesktopDatePicker
            disabled={ disabled}
            label={data.title}
            inputFormat="MM/DD/YYYY"
            value={data.value ? data.value : undefined}
            onChange={(newValue) => {
              data.changeState(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      {data.error && (
        <Typography component="p" color="error">
          {data.error}
        </Typography>
      )}
    </>
  );
};
export default DatePicker;
