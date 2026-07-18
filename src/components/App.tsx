import { Route, Switch } from "react-router-dom";

import Beach from "./Beach/Beach";

function App() {
  return (
    <Switch>
      <Route path="/beach">
        <Beach />
      </Route>
    </Switch>
  );
}

export default App;
