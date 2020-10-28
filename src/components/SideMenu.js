// import React from "react";
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//   SideMenu: {
//     display: "flex",
//     flexDirection: "column",
//     left: "0px",
//     width: "300px",
//     height: "100%",
//     backgroundColor: "lightblue",
//     position: "absolute",
//   },
// });

// function SideMenu() {
//   const classes = useStyles();
//   return <div className={classes.SideMenu}>Left Side Menu</div>;
// }

// export default SideMenu;

import React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    left: "0px",
    width: "300px",
    height: "100%",
    backgroundColor: "lightgreen",
    position: "absolute",
  },
};

const SideMenu = (props) => {
  const { classes } = props;
  return <div className={classes.sideMenu}>Left Side Menu</div>;
};

export default withStyles(styles)(SideMenu);
