import React from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import { CssBaseline, makeStyles } from "@material-ui/core";
import PageHeader from "../components/PageHeader";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

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
        <PageHeader
          icon={<PeopleOutlineIcon fontSize="large" />}
          title="Employee Management System"
          subtitle="we will add new employee record"
        />
      </div>
      <CssBaseline />
    </React.Fragment>
  );
}

export default App;
