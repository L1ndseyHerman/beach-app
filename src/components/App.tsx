import { Redirect, Route, Switch } from "react-router-dom";
import BeachPage from "./BeachPage/BeachPage";
import ShallowOceanPage from "./ShallowOceanPage/ShallowOceanPage";
import DeepOceanPage from "./DeepOceanPage/DeepOceanPage";
import NavDropdown from "./NavDropdown/NavDropdown";
import LoginFormPage from "./LoginFormPage/LoginFormPage";
import { Role, type User } from "../constants";
import UserProfileDropdown from "./UserProfileDropdown/UserProfileDropdown";
import { useState } from "react";
import PageNotFoundPage from "./PageNotFoundPage/PageNotFoundPage";
import { createStyles, makeStyles, type Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontFamily: "Arial",
      textAlign: "center",
    },
    dropdownsDiv: {
      paddingTop: "20px",
      paddingBottom: "20px",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
  }),
);

export default function App() {
  const classes = useStyles();

  const fakeUsers: User[] = [
    {
      username: "ScubaDiver",
      password: "0",
      role: Role.ScubaDiver,
    },
    {
      username: "Swimmer",
      password: "1",
      role: Role.Swimmer,
    },
    {
      username: "Mermaid",
      password: "2",
      role: Role.Mermaid,
    },
  ];

  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (theUser: User | null) => {
    setUser(theUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const scubaDiverUrls = ["/beach", "/shallow_ocean", "/deep_ocean"];
  const swimmerUrls = ["/beach", "/shallow_ocean"];
  const mermaidUrls = ["/shallow_ocean", "/deep_ocean"];
  const loginUrl = "/login";
  const pageNotFoundUrl = "/404";

  if (user === null) {
    return (
      <Switch>
        <Route path={loginUrl}>
          <div className={classes.text}>
            <LoginFormPage fakeUsers={fakeUsers} handleLogin={handleLogin} />
          </div>
        </Route>
        <Redirect to={loginUrl} />
      </Switch>
    );
  } else if (user.role === Role.ScubaDiver) {
    return (
      <Switch>
        <Route path={scubaDiverUrls[0]}>
          <div className={classes.text}>
            <div className={classes.dropdownsDiv}>
              <NavDropdown urls={scubaDiverUrls} />
              <UserProfileDropdown
                username={user?.username ?? ""}
                handleLogout={handleLogout}
                loginUrl={loginUrl}
              />
            </div>
            <BeachPage />
          </div>
        </Route>
        <Route path={scubaDiverUrls[1]}>
          <div className={classes.text}>
            <div className={classes.dropdownsDiv}>
              <NavDropdown urls={scubaDiverUrls} />
              <UserProfileDropdown
                username={user?.username ?? ""}
                handleLogout={handleLogout}
                loginUrl={loginUrl}
              />
            </div>
            <ShallowOceanPage />
          </div>
        </Route>
        <Route path={scubaDiverUrls[2]}>
          <div className={classes.text}>
            <div className={classes.dropdownsDiv}>
              <NavDropdown urls={scubaDiverUrls} />
              <UserProfileDropdown
                username={user?.username ?? ""}
                handleLogout={handleLogout}
                loginUrl={loginUrl}
              />
            </div>
            <DeepOceanPage />
          </div>
        </Route>
        <Route path={pageNotFoundUrl}>
          <div className={classes.text}>
            <PageNotFoundPage />
          </div>
        </Route>
        <Redirect to={pageNotFoundUrl} />
      </Switch>
    );
  } else if (user.role === Role.Swimmer) {
    return (
      <Switch>
        <Route path={swimmerUrls[0]}>
          <div className={classes.text}>
            <div className={classes.dropdownsDiv}>
              <NavDropdown urls={swimmerUrls} />
              <UserProfileDropdown
                username={user?.username ?? ""}
                handleLogout={handleLogout}
                loginUrl={loginUrl}
              />
            </div>
            <BeachPage />
          </div>
        </Route>
        <Route path={swimmerUrls[1]}>
          <div className={classes.text}>
            <div className={classes.dropdownsDiv}>
              <NavDropdown urls={swimmerUrls} />
              <UserProfileDropdown
                username={user?.username ?? ""}
                handleLogout={handleLogout}
                loginUrl={loginUrl}
              />
            </div>
            <ShallowOceanPage />
          </div>
        </Route>
        <Route path={pageNotFoundUrl}>
          <div className={classes.text}>
            <PageNotFoundPage />
          </div>
        </Route>
        <Redirect to={pageNotFoundUrl} />
      </Switch>
    );
  } else if (user.role === Role.Mermaid) {
    return (
      <Switch>
        <Route path={mermaidUrls[0]}>
          <div className={classes.text}>
            <div className={classes.dropdownsDiv}>
              <NavDropdown urls={mermaidUrls} />
              <UserProfileDropdown
                username={user?.username ?? ""}
                handleLogout={handleLogout}
                loginUrl={loginUrl}
              />
            </div>
            <ShallowOceanPage />
          </div>
        </Route>
        <Route path={mermaidUrls[1]}>
          <div className={classes.text}>
            <div className={classes.dropdownsDiv}>
              <NavDropdown urls={mermaidUrls} />
              <UserProfileDropdown
                username={user?.username ?? ""}
                handleLogout={handleLogout}
                loginUrl={loginUrl}
              />
            </div>
            <DeepOceanPage />
          </div>
        </Route>
        <Route path={pageNotFoundUrl}>
          <div className={classes.text}>
            <PageNotFoundPage />
          </div>
        </Route>
        <Redirect to={pageNotFoundUrl} />
      </Switch>
    );
  }
}
