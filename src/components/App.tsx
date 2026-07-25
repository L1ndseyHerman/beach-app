import { Route, Switch } from "react-router-dom";
import Beach from "./Beach/Beach";
import ShallowOcean from "./ShallowOcean/ShallowOcean";
import DeepOcean from "./DeepOcean/DeepOcean";
import NavDropdown from "./NavDropdown/NavDropdown";

export default function App() {
  const urls = ["/beach", "/shallow_ocean", "/deep_ocean"];

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
    </Switch>
  );
}
