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
  ];

  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (theUser: User | null) => {
    setUser(theUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const urls = ["/beach", "/shallow_ocean", "/deep_ocean", "/login"];

  if (user === null) {
    return (
      <Switch>
        <Route path={urls[3]}>
          <LoginForm fakeUsers={fakeUsers} handleLogin={handleLogin} />
        </Route>
        <Redirect to={urls[3]} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path={urls[0]}>
          <>
            <NavDropdown urls={urls} />
            <UserProfileDropdown
              username={user?.username ?? ""}
              handleLogout={handleLogout}
            />
            <Beach />
          </>
        </Route>
        <Route path={urls[1]}>
          <>
            <NavDropdown urls={urls} />
            <UserProfileDropdown
              username={user?.username ?? ""}
              handleLogout={handleLogout}
            />
            <ShallowOcean />
          </>
        </Route>
        <Route path={urls[2]}>
          <>
            <NavDropdown urls={urls} />
            <UserProfileDropdown
              username={user?.username ?? ""}
              handleLogout={handleLogout}
            />
            <DeepOcean />
          </>
        </Route>
        <Route path={urls[3]}>
          <LoginForm fakeUsers={fakeUsers} handleLogin={handleLogin} />
        </Route>
        <Redirect to={urls[3]} />
      </Switch>
    );
  }
}
