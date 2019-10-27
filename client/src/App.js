import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Manager from "./pages/manager";
import Login from "./pages/login";
import Tech from "./pages/tech";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Manager" component={Manager} />
          <Route exact path="/Tech" component={Tech} />
    
        </Switch>
      </div>
    </Router>
  );
}

export default App;


