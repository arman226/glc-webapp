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
  Grade as GradeIcon,
  Home as HomeIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  LibraryBooks as LibraryBooksIcon,
  Assignment as AssignmentIcon,
  DateRange as DateRangeIcon,
  Ballot as BallotIcon,
  AccountCircle as AccountCircleIcon,
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
    name: "Students",
    Icon: SchoolIcon,
    path: "/student",
  },
  {
    key: 3,
    name: "Grades",
    Icon: GradeIcon,
    path: "/grades",
  },
  {
    key: 4,
    name: "Instructors",
    Icon: PersonIcon,
    path: "/instructors",
  },
  {
    key: 5,
    name: "Subjects",
    Icon: LibraryBooksIcon,
    path: "/subjects",
  },
  {
    key: 6,
    name: "Sections",
    Icon: AssignmentIcon,
    path: "/sections",
  },
  {
    key: 7,
    name: "Schedules",
    Icon: DateRangeIcon,
    path: "/schedules",
  },
  {
    key: 8,
    name: "Accounts",
    Icon: BallotIcon,
    path: "/accounts",
  },
  {
    key: 9,
    name: "Users",
    Icon: AccountCircleIcon,
    path: "/users",
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
        <IconButton 
        onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <hr />
      <List style={{ color: 'black' }}>
        {menu.map(({ Icon, name, path }) => (
          <ListItem button key={name} onClick={goToPath(path)}>
            <ListItemIcon>
              <Icon style={{ color: 'black' }}/>
            </ListItemIcon>
            <ListItemText primary={name} />
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
    backgroundColor: "#ebfaeb",
    width: DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: "#ebfaeb",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 1,
    },
  },
  toolbar: {
    backgroundColor: "#ebfaeb",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default MyDrawer;
