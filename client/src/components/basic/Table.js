/*eslint-disable*/
import { Grid, Typography, Paper, Avatar } from "@mui/material";
import CustomizedButton from "./CustomizedButton";
import useStyles from "../../styles/style";
import { Stack } from "@mui/system";

const Table = ({ data, title, reserve, user }) => {
  const classes = useStyles();
  return (
    <Paper
      className={classes.root}
      elevation={4}
      style={{ width: "auto", overflow: "auto" }}
    >
      <Stack style={{ display: "inline-block" }}>
        {title && (
          <Typography
            variant="h5"
            style={{
              color: "orange",
              display: "flex",
              margin: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {title} &nbsp;&nbsp;
            {user.isAuthenticated &&
              reserve.map((_, i) => {
                return <CustomizedButton key={i} data={_} />;
              })}
          </Typography>
        )}
      </Stack>
      <Grid container spacing={2} direction="row" style={{ minWidth: 800 }}>
        {data &&
          data.map((_, j) => {
            return (
              <Grid
                key={_.id + _.title}
                item
                xs={12 / data.length}
                md={12 / data.length}
                lg={12 / data.length}
              >
                <Grid item className={classes.tableH}>
                  <Typography>{_.title}</Typography>
                </Grid>
                {_.elements.map((element, i) => {
                  return (
                    <Grid item className={classes.tableC} key={_.id + i + j}>
                      {_.title !== "Image" ? (
                        element
                      ) : (
                        <Avatar
                          src={require(`../../images/authors/${element}`)}
                        />
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
      </Grid>
    </Paper>
  );
};

export default Table;
