import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CardDialog = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      style={{ color: "orange" }}
    >
      <DialogTitle style={{ color: "orange" }} id="alert-dialog-title">
        Payment
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ color: "Green" }} id="alert-dialog-description">
          Your reservation is successfully competed!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            navigate("/");
          }}
          style={{ color: "orange" }}
        >
          GO TO HOME PAGE
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CardDialog;
