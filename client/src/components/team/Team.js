import { Grid } from "@mui/material";
import { getData } from "./team.helper";
import Member from "../member/Member";
const Team = (props) => {
  const data = getData();
  return (
    <Grid container spacing={2} style={{ margin: "auto", maxWidth: 1200 }}>
      {data.map((_,i) => {
        return <Member key={i} data={_} />;
      })}
    </Grid>
  );
};

export default Team;
