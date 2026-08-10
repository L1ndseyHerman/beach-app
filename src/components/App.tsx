import { Redirect, Route, Switch } from "react-router-dom";
import Beach from "./Beach/Beach";
import ShallowOcean from "./ShallowOcean/ShallowOcean";
import DeepOcean from "./DeepOcean/DeepOcean";
import NavDropdown from "./NavDropdown/NavDropdown";
import LoginForm from "./LoginForm/LoginForm";
import { Role, type User } from "../constants";
import UserProfileDropdown from "./UserProfileDropdown/UserProfileDropdown";
import { useState } from "react";

export default function App() {
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

  if (user === null) {
    return (
      <Switch>
        <Route path={loginUrl}>
          <LoginForm fakeUsers={fakeUsers} handleLogin={handleLogin} />
        </Route>
        <Redirect to={loginUrl} />
      </Switch>
    );
  } else if (user.role === Role.ScubaDiver) {
    return (
      <Switch>
        <Route path={scubaDiverUrls[0]}>
          <>
            <NavDropdown urls={scubaDiverUrls} />
            <UserProfileDropdown
              username={user?.username ?? ""}
              handleLogout={handleLogout}
              loginUrl={loginUrl}
            />
            <Beach />
          </>
        </Route>
        <Route path={scubaDiverUrls[1]}>
          <>
            <NavDropdown urls={scubaDiverUrls} />
            <UserProfileDropdown
              username={user?.username ?? ""}
              handleLogout={handleLogout}
              loginUrl={loginUrl}
            />
            <ShallowOcean />
          </>
        </Route>
        <Route path={scubaDiverUrls[2]}>
          <>
            <NavDropdown urls={scubaDiverUrls} />
            <UserProfileDropdown
              username={user?.username ?? ""}
              handleLogout={handleLogout}
              loginUrl={loginUrl}
            />
            <DeepOcean />
          </>
        </Route>
        <Route path={loginUrl}>
          <LoginForm fakeUsers={fakeUsers} handleLogin={handleLogin} />
        </Route>
        <Redirect to={loginUrl} />
      </Switch>
    );
  } else if (user.role === Role.Swimmer) {
    return (
      <Switch>
        <Route path={swimmerUrls[0]}>
          <>
            <NavDropdown urls={swimmerUrls} />
            <UserProfileDropdown
              username={user?.username ?? ""}
              handleLogout={handleLogout}
              loginUrl={loginUrl}
            />
            <Beach />
          </>
        </Route>
        <Route path={swimmerUrls[1]}>
          <>
            <NavDropdown urls={swimmerUrls} />
            <UserProfileDropdown
              username={user?.username ?? ""}
              handleLogout={handleLogout}
              loginUrl={loginUrl}
            />
            <ShallowOcean />
          </>
        </Route>
        <Route path={loginUrl}>
          <LoginForm fakeUsers={fakeUsers} handleLogin={handleLogin} />
        </Route>
        <Redirect to={loginUrl} />
      </Switch>
    );
  } else if (user.role === Role.Mermaid) {
    return (
      <Switch>
        <Route path={mermaidUrls[0]}>
          <>
            <NavDropdown urls={mermaidUrls} />
            <UserProfileDropdown
              username={user?.username ?? ""}
              handleLogout={handleLogout}
              loginUrl={loginUrl}
            />
            <ShallowOcean />
          </>
        </Route>
        <Route path={mermaidUrls[1]}>
          <>
            <NavDropdown urls={mermaidUrls} />
            <UserProfileDropdown
              username={user?.username ?? ""}
              handleLogout={handleLogout}
              loginUrl={loginUrl}
            />
            <DeepOcean />
          </>
        </Route>
        <Route path={loginUrl}>
          <LoginForm fakeUsers={fakeUsers} handleLogin={handleLogin} />
        </Route>
        <Redirect to={loginUrl} />
      </Switch>
    );
  }
}
