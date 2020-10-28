import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Grid, InputBase, IconButton, Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "#fff",
//   },
//   searchItem: {
//     width: "300px",
//     fontSize: "0.8rem",
//     padding: "0px 10px",
//     opacity: "0.6px",
//     "&:hover": {
//       backgroundColor: "lightgrey",
//     },
//     "& .MuiSvgIcon-root ": {
//       marginRight: "30px",
//     },
//     btnRoot: {
//       backgroundColor: "green",
//     },
//     btnLabel: {
//       backgroundColor: "red",
//     },
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  searchItem: {
    width: "300px",
    fontSize: "0.8rem",
    padding: `0px ${theme.spacing(1)}px`,
    opacity: "0.6px",
    "&:hover": {
      backgroundColor: "lightgrey",
    },
    "& .MuiSvgIcon-root ": {
      marginRight: `${theme.spacing(4)}px`,
    },
    btnRoot: {
      backgroundColor: "green",
    },
    btnLabel: {
      backgroundColor: "red",
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid>
            <InputBase
              startAdornment={<SearchIcon fontSize="small" />}
              placeholder="Search Here"
              className={classes.searchItem}
            />
          </Grid>
          <Grid item sm={true}></Grid>
          <Grid>
            <IconButton
              className={{ root: classes.btnRoot, label: classes.btnLabel }}
            >
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge badgeContent={10} color="default">
                <ChatIcon />
              </Badge>
            </IconButton>

            <IconButton>
              <PowerSettingsNewIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
