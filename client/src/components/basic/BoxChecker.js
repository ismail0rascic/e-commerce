import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@material-ui/core";
const BoxChecker = ({ data, value, disabled }) => {
  return (
    <>
      <FormGroup className={data.class}>
        <FormControlLabel
          disabled={disabled}
          checked={data.values && data.values.includes(value)}
          style={{ justifyContent: "center" }}
          //value={value}
          control={<Checkbox onChange={(e) => data.changeState(value)} />}
          label={data.label}
        />
      </FormGroup>
      {data.error && (
        <Typography component="p" color="error">
          {data.error}
        </Typography>
      )}
    </>
  );
};
export default BoxChecker;
