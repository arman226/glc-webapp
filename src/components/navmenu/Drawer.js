import React from "react";
import clsx from "clsx";
import {
  List,
  Drawer,
  Divider,
  IconButton,
  ListItemIcon,
  ListItem,
  ListItemText,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Mail as MailIcon,
  Home as HomeIcon,
} from "@material-ui/icons";
import { DRAWER_WIDTH } from "../../styles/dimens.styles";

const menu = [
  {
    key: 1,
    name: "Home",
    Icon: HomeIcon,
    path: "/",
  },
  {
    key: 2,
    name: "Test",
    Icon: MailIcon,
    path: "/test",
  },
];

const MyDrawer = ({ handleDrawerClose, open }) => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();

  const goToPath = (path) => () => {
    history.push(path);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <hr />
      <List>
        {menu.map(({ Icon, name, path }) => (
          <ListItem button key={name} onClick={goToPath(path)}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={name} onClick={goToPath(path)} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

export default MyDrawer;
