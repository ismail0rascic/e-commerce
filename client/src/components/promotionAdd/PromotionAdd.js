import { connect } from "react-redux";

import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import Field from "../basic/Field";
import CustomizedButton from "../basic/CustomizedButton";

import useStyles from "../../styles/style";
import usePromotionAdd from "./usePromotionAdd";
import useError from "../../customHooks/useError";

const PromotionAdd = (props) => {
  const classes = useStyles();

  const { values, setValues, fields, buttons } = usePromotionAdd(classes);
  useError(setValues, values, props.errors);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Add Promotion
        </Typography>
        {fields
          .filter((filed) => filed)
          .map((_, i) => {
            return (
              <div key={_ + i}>
                <Field
                  data={_}
                  values={values}
                  id={values.id}
                  setValues={setValues}
                />
                &nbsp;
                <Typography color="primary">
                  {i === 0 ? "percentage %" : "hour H"}
                </Typography>
              </div>
            );
          })}
      </CardContent>
      <CardActions>
        <CustomizedButton data={buttons} />;
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errorR,
});
export default connect(mapStateToProps)(PromotionAdd);
