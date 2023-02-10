import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@material-ui/core";
import useStyles from "../../styles/style";

const RadioChecker = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      <FormControl className={data.class ? data.class : classes.radio}>
        <FormLabel id="demo-radio-buttons-group-label" variant="h4">
          {data.title}
        </FormLabel>
        <RadioGroup
          className={classes.radio1}
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {data.elements.map((_) => {
            return (
              <FormControlLabel
                key={_}
                onClick={() => data.changeState(_)}
                value={_}
                control={<Radio checked={data.value === _} />}
                label={_}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      {data.error && (
        <Typography component="p" color="error">
          {data.error}
        </Typography>
      )}
    </>
  );
};
export default RadioChecker;
