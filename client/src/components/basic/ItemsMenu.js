import * as React from "react";
import { Button } from "@material-ui/core";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const ItemsMenu = (props) => {
  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              color="primary"
              variant="contained"
              {...bindTrigger(popupState)}
            >
              {props.data.button}
            </Button>
            <Menu {...bindMenu(popupState)}>
              {props.data.items.map((_, i) => {
                return (
                  <MenuItem key={i} onClick={_.func}>
                    {_.name}
                  </MenuItem>
                );
              })}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </>
  );
};
export default ItemsMenu;
