import { Route, Switch } from "react-router-dom";
import Beach from "./Beach/Beach";
import ShallowOcean from "./ShallowOcean/ShallowOcean";
import DeepOcean from "./DeepOcean/DeepOcean";
import NavDropdown from "./NavDropdown/NavDropdown";

function App() {
  return (
    <Switch>
      <Route path="/beach">
        <>
          <NavDropdown />
          <Beach />
        </>
      </Route>
      <Route path="/shallow_ocean">
        <>
          <NavDropdown />
          <ShallowOcean />
        </>
      </Route>
      <Route path="/deep_ocean">
        <>
          <NavDropdown />
          <DeepOcean />
        </>
      </Route>
    </Switch>
  );
}

export default App;
