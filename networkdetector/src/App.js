import React from 'react';
import Dashboard from "./components/dashboard"
import Login from "./components/login"
import Tempmap from "./components/tempmap"
import Dropdown from './components/dropdown'
import {
  BrowserRouter as Router, Route,
  Switch,
} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/dropdown" component={Dropdown} />
          <Route path="/tempmap" component={Tempmap} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
