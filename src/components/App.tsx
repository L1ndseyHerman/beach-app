import { Redirect, Route, Switch } from "react-router-dom";
import Beach from "./Beach/Beach";
import ShallowOcean from "./ShallowOcean/ShallowOcean";
import DeepOcean from "./DeepOcean/DeepOcean";
import NavDropdown from "./NavDropdown/NavDropdown";
import LoginForm from "./LoginForm/LoginForm";
import { Role, type User } from "../constants";

export default function App() {
  const fakeUsers: User[] = [
    {
      username: "ScubaDiver",
      password: "0",
      role: Role.ScubaDiver,
    },
  ];

  const urls = ["/beach", "/shallow_ocean", "/deep_ocean", "/login"];

  return (
    <Switch>
      <Route path={urls[0]}>
        <>
          <NavDropdown urls={urls} />
          <Beach />
        </>
      </Route>
      <Route path={urls[1]}>
        <>
          <NavDropdown urls={urls} />
          <ShallowOcean />
        </>
      </Route>
      <Route path={urls[2]}>
        <>
          <NavDropdown urls={urls} />
          <DeepOcean />
        </>
      </Route>
      <Route path={urls[3]}>
        <LoginForm fakeUsers={fakeUsers} />
      </Route>
      <Redirect to={urls[3]} />
    </Switch>
  );
}
