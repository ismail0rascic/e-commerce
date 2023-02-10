import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import Field from "../basic/Field";
import CustomizedButton from "../basic/CustomizedButton";
import DatePicker from "../basic/DatePicker";
import RadioChecker from "../basic/RadioChecker";
import SetPassword from "../setPassword/SetPassword";

import { updateUser, refreshUser } from "../../actions/userActions";
import { clearError } from "../../actions/errorActions";
import useStyles from "../../styles/style";
import { profileFieldsData } from "./profile.fields.data";
import { profileButtons } from "./profile.buttons.data";
import { profileRadios } from "./profile.radios.data";
import { profileDate } from "./profile.date.data";
import useRefresh from "../../customHooks/useRefresh";

const ProfilePage = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const id = useParams().id;
  let findId = id ? id : props.auth.user._id;
  const user = props.users && props.users.find((o) => o._id === findId);

  const [values, setValues] = useState({
    name: false,
    gender: false,
    DOB: false,
    phone: false,
    email: false,
    role: false,

    errors: {},
  });
  const [open, setOpen] = useState(false);

  useRefresh("users", props.users, refreshUser);

  useEffect(() => {
    clearError();
  }, []);
  useEffect(() => {
    if (props.errors) {
      setValues({
        ...values,
        errors: props.errors,
      });
    }
    // eslint-disable-next-line
  }, [props.errors]);

  const clickClose = () => {
    navigate(id ? "/admin/users" : "/");
  };
  const clickSetProfile = () => {
    setOpen(true);
  };
  const clickSave = (e) => {
    const newUser = {
      name: values.name !== false ? values.name : user.name,
      gender: values.gender !== false ? values.gender : user.gender,
      DOB: values.DOB !== false ? values.DOB : user.DOB,
      phone: values.phone !== false ? values.phone : user.phone,
      email: values.email !== false ? values.email : user.email,
      role: values.role !== false ? values.role : user.role,
      id: user._id,
    };
    updateUser(newUser, navigate);
  };
  const fields = user && profileFieldsData(values, user, classes);
  const buttons = profileButtons(
    clickClose,
    clickSave,
    clickSetProfile,
    classes
  );
  const radios = user && profileRadios(setValues, values, user);
  const date = user && profileDate(setValues, user, values);

  return (
    <>
      {user && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" className={classes.title}>
              {id ? "Edit User" : "Profile Page"}
            </Typography>
            {fields.map((_, i) => {
              return (
                <div key={_.id + i}>
                  <Field
                    data={_}
                    values={values}
                    id={values.id}
                    setValues={setValues}
                  />
                  {i === 0 && (
                    <>
                      <DatePicker data={date} />
                      <RadioChecker data={radios[0]} />
                    </>
                  )}
                  {i + 1 === fields.length && (
                    <>
                      {id && <RadioChecker data={radios[1]} />}
                      <CustomizedButton data={buttons[buttons.length - 1]} />
                    </>
                  )}
                </div>
              );
            })}
          </CardContent>
          <CardActions>
            {buttons.splice(0, 2).map((_, i) => {
              return <CustomizedButton data={_} key={_.id} />;
            })}
          </CardActions>
        </Card>
      )}
      <SetPassword open={open} setOpen={setOpen} id={id} />
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  errors: state.errorR,
  users: state.userR,
});
export default connect(mapStateToProps)(ProfilePage);
