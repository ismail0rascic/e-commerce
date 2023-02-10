/*eslint-disable*/
import axios from "axios";

import { Avatar, Button, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Typography } from "@material-ui/core";

const AddImage = (props) => {
  const location = window.location.pathname;
  const upload = (e) => {
    let file = e.target.files[0];
    const formData = new FormData();
    formData.append("photo", file);

    const url = location.includes("book")
      ? "http://localhost:5000/uploadBook"
      : "http://localhost:5000/uploadAuthor";

    axios.post(url, formData).then((response) => {
      setTimeout(() => {
        props.setValues({ ...props.values, image: response.data.filename });
      }, 1000);
    });
  };
  const getImage = () => {
    let image =
      location &&
      location !== "/" &&
      require(`../../images/${
        location.includes("book") ? "books" : "authors"
      }/${props.image}`);

    return image;
  };
  const image = props.image && location && getImage();

  return (
    <Stack alignItems="center" justifyContent="center">
      {props.image && location !== "/" && (
        <>
          <Avatar
            src={image ? image : " "}
            alt="item img"
            sx={{ width: 250, height: 250, margin: 5 }}
          />
        </>
      )}
      <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          type="file"
          onChange={upload}
        />

        <Button
          color="secondary"
          variant="outlined"
          component="span"
          disabled={props.disabled}
        >
          <AddCircleOutlineIcon /> &nbsp; Upload button
        </Button>
      </label>
      {props.values.errors.image && (
        <Typography component="p" color="error">
          {props.values.errors.image}
        </Typography>
      )}
    </Stack>
  );
};
export default AddImage;
