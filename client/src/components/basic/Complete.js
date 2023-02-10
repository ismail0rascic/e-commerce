import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography } from "@material-ui/core";

const Complete = ({ data, disabled }) => {
  return (
    <>
      <Autocomplete
        disabled={disabled}
        className={data.class}
        options={data.data}
        value={data.value}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        onInputChange={(event, newInputValue) => {
          data.changeState(newInputValue);
        }}
        renderInput={(params) => <TextField label={data.title} {...params} />}
      />

      {data && data.error && (
        <Typography component="p" color="error">
          {data.error}
        </Typography>
      )}
    </>
  );
};

export default Complete;
