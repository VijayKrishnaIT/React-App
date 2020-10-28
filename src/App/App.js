import React from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import { CssBaseline, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "300px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </React.Fragment>
  );
}

export default App;
