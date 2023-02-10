import { Card, List } from "@material-ui/core";

import useStyles from "../../styles/style";

const CustomizedList = (props) => {
  const classes = useStyles();

  return (
    <>
      {
        <Card
          className={classes.card}
          style={{ maxHeight: 700, width: "80%", overflow: "auto" }}
        >
          <List>
            {props.data.map((_, i) => {
              return <div key={i}>{props.child(_, i)}</div>;
            })}
          </List>
        </Card>
      }
    </>
  );
};

export default CustomizedList;
