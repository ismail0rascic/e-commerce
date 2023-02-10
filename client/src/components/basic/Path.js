import { ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Path = ({ data, arg, id, lineId }) => {
  return (
    <ListItem
      onClick={() => data.func(arg, id, lineId)}
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
      }}
    >
      <Link style={{ color: "#FF4500", width: "auto",height:"auto" }}>
        <Typography component={"span"} variant={"h6"}>
          {data.title}
        </Typography>
      </Link>
    </ListItem>
  );
};

export default Path;
