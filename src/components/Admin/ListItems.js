import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ArchiveIcon from "@material-ui/icons/Archive";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PaymentIcon from "@material-ui/icons/Payment";
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles, List } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(2.5),
  },
}));

export const MainListItems = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState({
    quality: false,
    budgets: false,
    inventory: false,
  });

  const handleDropdown = (name) => {
    setOpen((prevState) => ({
      ...prevState,
      [name]: !open[name],
    }));
  };

  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon style={{ fill: "#fefefe" }} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentTurnedInIcon style={{ fill: "#fefefe" }} />
        </ListItemIcon>
        <ListItemText primary="Vendors List" />
      </ListItem>
      <ListItem button onClick={() => handleDropdown("quality")}>
        <ListItemIcon>
          <PeopleIcon style={{ fill: "#fefefe" }} />
        </ListItemIcon>
        <ListItemText primary="Quality Mgt." />
        {open.quality ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.quality} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>AV</ListItemIcon>
            <ListItemText primary="Approved Vendors" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={() => handleDropdown("budgets")}>
        <ListItemIcon>
          <MonetizationOnIcon style={{ fill: "#fefefe" }} />
        </ListItemIcon>
        <ListItemText primary="Budgets" />
        {open.budgets ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.budgets} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>AB</ListItemIcon>
            <ListItemText primary="Annual Budgets" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={() => handleDropdown("inventory")}>
        <ListItemIcon>
          <ArchiveIcon style={{ fill: "#fefefe" }} />
        </ListItemIcon>
        <ListItemText primary="Inventory Mgt." />
        {open.inventory ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.inventory} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>ST</ListItemIcon>
            <ListItemText primary="Store" />
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
};

export const SecondaryListItems = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState({
    sales: false,
    purchasing: false,
    setup: false,
  });

  const handleDropdown = (name) => {
    setOpen((prevState) => ({
      ...prevState,
      [name]: !open[name],
    }));
  };
  return (
    <div>
      <ListItem button onClick={() => handleDropdown("sales")}>
        <ListItemIcon>
          <AttachMoneyIcon style={{ fill: "#fefefe" }} />
        </ListItemIcon>
        <ListItemText primary="Sales Mgt." />
        {open.sales ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.sales} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>SO</ListItemIcon>
            <ListItemText primary="Sales Order" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>QT</ListItemIcon>
            <ListItemText primary="Quotation" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={() => handleDropdown("purchasing")}>
        <ListItemIcon>
          <PaymentIcon style={{ fill: "#fefefe" }} />
        </ListItemIcon>
        <ListItemText primary="Purchasing" />
        {open.purchasing ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.purchasing} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>PR</ListItemIcon>
            <ListItemText primary="Purchase Req." />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>RFQ</ListItemIcon>
            <ListItemText primary="Request For Quot." />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>PO</ListItemIcon>
            <ListItemText primary="Purchase Order" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>RI</ListItemIcon>
            <ListItemText primary="Receiving & Inspec." />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>RL</ListItemIcon>
            <ListItemText primary="Rejection Logs" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>OM</ListItemIcon>
            <ListItemText primary="Open Market" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={() => handleDropdown("setup")}>
        <ListItemIcon>
          <SettingsIcon style={{ fill: "#fefefe" }} />
        </ListItemIcon>
        <ListItemText primary="Setup" />
        {open.setup ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.setup} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>CUA</ListItemIcon>
            <ListItemText primary="Create User Acc." />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>UAC</ListItemIcon>
            <ListItemText primary="User Access Cont." />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{ color: "#fefefe" }}>GRP</ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
};
