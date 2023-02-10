import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
  },
  title: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginLeft: 20,
    color: theme.palette.openTitle,
  },

  card: {
    maxWidth: 800,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    border: "3px solid orange",
  },
  card1: {
    maxWidth: 600,

    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    border: "3px solid orange",
  },
  error: {
    verticalAlign: "middle",
  },

  textField: {
    margin: "auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 300,
  },
  button: {
    margin: "auto",
  },
  bar: {
    background: theme.palette.openTitle,
  },
  tableH: {
    display: "flex",
    justifyContent: "center",
    background: "lightGray",
    border: "3px solid lightBlue",
    height: 30,
  },

  tableC: {
    display: "flex",
    justifyContent: "center",
    border: "3px solid lightBlue",
    alignItems: "center",
    height: 50,
  },
  radio: {
    width: 300,
  },
  radio1: {
    margin: "auto",
  },
  date: {
    margin: "auto",
    width: 300,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },

  list: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    border: "3px solid orange",
  },
  homeItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    height: "50%",
  },

  imgItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0px",
    borderRight: "5px solid orange",
    padding: 0,
  },
  seatField: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
