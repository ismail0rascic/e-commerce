import { Avatar, Grid, Typography } from "@mui/material";

const Member = (props) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      lg={4}
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Grid item>
        <Avatar
          src={props.data.img}
          alt="item img"
          sx={{ width: 250, height: 250, margin: "auto" }}
        />
      </Grid>
      <Grid item>
        <Typography
          style={{
            textAlign: "center",
            paddingTop: 20,
          }}
        >
          {props.data.name}
        </Typography>
        <Typography style={{ textAlign: "center", paddingTop: 20 }}>
          {props.data.position}
        </Typography>
        <Typography
          style={{
            textAlign: "center",
            paddingTop: 20,
          }}
        >
          {props.data.desc}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Member;
