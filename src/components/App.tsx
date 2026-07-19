import { Route, Switch } from "react-router-dom";

import Beach from "./Beach/Beach";
import ShallowOcean from "./ShallowOcean/ShallowOcean";
import DeepOcean from "./DeepOcean/DeepOcean";

function App() {
  return (
    <Switch>
      <Route path="/beach">
        <Beach />
      </Route>
      <Route path="/shallow_ocean">
        <ShallowOcean />
      </Route>
      <Route path="/deep_ocean">
        <DeepOcean />
      </Route>
    </Switch>
  );
}

export default App;
