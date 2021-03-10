import React from "react";
import { CssBaseline } from "@material-ui/core";
import AppBar from "./AppBar";
import MyDrawer from "./Drawer";

const NavMenu = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <AppBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <MyDrawer handleDrawerClose={handleDrawerClose} open={open} />
    </>
  );
};

export default NavMenu;
