import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//   sideMenu: {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     left: "0px",
//     width: "300px",
//     height: "100%",
//     backgroundColor: "grey",
//   },
// });
// function SideMenu() {
//   const classes = useStyles();
//   return <div className={classes.sideMenu}>LeftSide Menu</div>;
// }

// export default SideMenu;

const styles = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    left: "0px",
    width: "300px",
    height: "100%",
    backgroundColor: "lightblue",
    position: "absolute",
  },
};

const SideMenu = (props) => {
  const { classes } = props;
  return <div className={classes.sideMenu}>Left Side Menu</div>;
};

export default withStyles(styles)(SideMenu);
