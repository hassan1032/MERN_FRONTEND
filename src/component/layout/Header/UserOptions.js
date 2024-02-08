import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop"
import DashboradIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../actions/userAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const UserOptions = ({ user }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },

    { icon: <PersonIcon />, name: "profile", func: account },

    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];
  if (user.role === "admin") {
    options.unshift({
      icon: <DashboradIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  function dashboard() {
    navigate("/dashboard");
  }
  function orders() {
    navigate("/orders");
  }
  function account() {
    navigate("/account");
  }
  function logoutUser() {
    dispatch(logout());
    toast.success("Logout Is Successfuly");
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex:"10"}}/>
      <SpeedDial
        ariaLabel="SpeedDial tooltrip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{zIndex: "11"}}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "Profile.png"}
            alt="Profile"

          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
          key={item.name}

            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
