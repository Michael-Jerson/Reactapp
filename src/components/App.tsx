import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Flags from './Flags/Flag';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
       <Home />
      </Route>
      <Route path="/Home" exact>
        <Home />
      </Route>
      <Route path="/:Flags" exact>
       <Flags />
      </Route>
    </Switch>
    </Router>
);

export default App;