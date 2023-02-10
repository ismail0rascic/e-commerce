import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const getItems = (navigate) => {
  return {
    button: "Manage System",
    icon: <ArrowDropDownIcon />,
    items: [
      {
        name: "Add Item",
        func: function () {
          navigate("/book/add");
        },
      },
      {
        name: "Add Promotion",
        func: function () {
          navigate("/promotion/add");
        },
      },
      {
        name: "Orders list",
        func: function () {
          navigate("/orders");
        },
      },
    ],
  };
};
