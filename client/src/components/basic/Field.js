import { TextField, Typography } from "@material-ui/core";
const Field = ({ data, values, setValues, disabled }) => {
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <>
      <TextField
        variant="outlined"
        disabled={data.disabled ? data.disabled : disabled}
        id={data.id}
        type={data.type}
        label={data.label}
        inputvalue={data.value}
        value={data.value}
        className={data.class}
        onChange={
          data.changeState ? data.changeState(data.id) : handleChange(data.id)
        }
        margin="normal"
      />
      {data.error && (
        <Typography component="p" color="error">
          {data.error}
        </Typography>
      )}
      <br />
    </>
  );
};

export default Field;
