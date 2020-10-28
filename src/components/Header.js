import {
  AppBar,
  Grid,
  Toolbar,
  InputBase,
  IconButton,
  Badge,
} from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ChatIcon from "@material-ui/icons/Chat";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
  },
  searchItem: {
    fontSize: "0.8rem",
    padding: "0px 10px",
    opacity: "0.6",
    "&:hover": {
      backgroundColor: "lightgrey",
    },
    "&.MuiSvgIcon-fontSizeSmall": {
      marginRight: "30px",
    },
    btnRoot: {
      backgroundColor: "green",
    },
    btnlabel: {
      backgroundColor: "pink",
    },
  },
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Grid Container alignItems="center">
          <Grid>
            <InputBase
              startAdornment={<SearchIcon />}
              className={classes.searchItem}
            />
          </Grid>
          <Grid item sm={true}>
            <IconButton
              classes={{ root: classes.btnRoot, label: classes.btnlabel }}
            >
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <badgeContent color="primary">
                <ChatIcon />
              </badgeContent>
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
